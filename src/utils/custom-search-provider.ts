/* eslint-disable @typescript-eslint/no-explicit-any */
import { Loader } from '@googlemaps/js-api-loader';

type CustomSearchProviderOptions = {
  apiKey: string;
};
// TODO: add TS types for google.maps https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/javascript/reference/geocoder#Geocoder
function CustomSearchProvider(options: CustomSearchProviderOptions) {
  const apiKey = options.apiKey;
  const searchUrl = 'https://places.googleapis.com/v1/places:autocomplete';
  let geocoder: google.maps.Geocoder;

  if (typeof window !== 'undefined') {
    new Loader(options).load().then((google) => {
      geocoder = new google.maps.Geocoder();
    });
  }

  async function parse(response: any) {
    const suggestions = response.data.suggestions;

    async function fetchGeocodeResults(suggestion: any) {
      try {
        const dataResponse = await geocoder.geocode({
          placeId: suggestion.placePrediction.placeId,
        });

        return dataResponse.results;
      } catch (e: any) {
        if (e.code !== 'ZERO_RESULTS') {
          // eslint-disable-next-line no-console
          console.error(`${e.code}: ${e.message}`);
        }

        return [];
      }
    }

    async function fetchAllResults() {
      if (!suggestions || suggestions.length === 0) {
        return [];
      }

      const allResults = await Promise.all(
        suggestions.map((suggestion: any) => fetchGeocodeResults(suggestion)),
      );

      const records = allResults.flat();

      return records.map((r) => {
        const { lat, lng } = r.geometry.location.toJSON();
        const { east, north, south, west } = r.geometry.viewport.toJSON();

        return {
          x: lng,
          y: lat,
          label: r.formatted_address,
          bounds: [
            [south, west],
            [north, east],
          ],
          raw: r,
        };
      });
    }

    return await fetchAllResults();
  }

  async function search(searchOptions: any) {
    const url = `${searchUrl}`;

    const request = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ input: searchOptions.query }),
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
      },
    });

    const json = await request.json();

    return parse({ data: json });
  }

  return {
    search,
  };
}

export default CustomSearchProvider;
