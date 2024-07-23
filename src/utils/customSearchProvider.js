import { JsonProvider } from 'leaflet-geosearch'
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader'

export default class CustomSearchProvider extends JsonProvider {
  searchUrl

  constructor(options = {}) {
    super(options)
    this.apiKey = options.apiKey
    this.searchUrl = 'https://places.googleapis.com/v1/places:autocomplete'

    if (typeof window !== 'undefined') {
      this.loader = new Loader(options).load().then((google) => {
        const geocoder = new google.maps.Geocoder()
        this.geocoder = geocoder
        return geocoder
      })
    }
  }

  endpoint({ query }) {
    return this.getUrl(`${this.searchUrl}`)
  }

  async parse(response) {
    const suggestions = response.data.suggestions

    const fetchGeocodeResults = async (suggestion) => {
      try {
        const response = await this.geocoder.geocode({
          placeId: suggestion.placePrediction.placeId,
        })
        return response.results
      } catch (e) {
        if (e.code !== 'ZERO_RESULTS') {
          console.error(`${e.code}: ${e.message}`)
        }
        return []
      }
    }

    const fetchAllResults = async () => {
      if (suggestions === undefined || suggestions.length === 0) {
        return []
      }
      const allResults = await Promise.all(
        suggestions.map((suggestion) => fetchGeocodeResults(suggestion))
      )
      const records = allResults.flat()

      return records.map((r) => {
        const { lat, lng } = r.geometry.location.toJSON()
        const { east, north, south, west } = r.geometry.viewport.toJSON()

        return {
          x: lng,
          y: lat,
          label: r.formatted_address,
          bounds: [
            [south, west],
            [north, east],
          ],
          raw: r,
        }
      })
    }

    return await fetchAllResults()
  }

  async search(options) {
    const url = this.endpoint({
      query: options.query,
    })

    const request = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ input: options.query }),
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': this.apiKey,
      },
    })
    const json = await request.json()
    return this.parse({ data: json })
  }
}
