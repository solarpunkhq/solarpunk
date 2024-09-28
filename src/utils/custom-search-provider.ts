import { Loader } from '@googlemaps/js-api-loader';

type CustomSearchProviderOptions = {
  apiKey: string;
};

type Suggestion = {
  placePrediction: {
    placeId: string;
  };
};

type Response = {
  data: {
    suggestions: Suggestion[];
  };
};

type SearchOptions = {
  query: string;
};

function customSearchProvider(options: CustomSearchProviderOptions) {
  const apiKey = options.apiKey;
  const searchUrl = 'https://places.googleapis.com/v1/places:autocomplete';
  let geocoder: google.maps.Geocoder;

  const geocoderPromise = new Promise<void>((resolve) => {
    if (typeof window !== 'undefined') {
      new Loader(options).load().then((google) => {
        geocoder = new google.maps.Geocoder();
        resolve();
      });
    }
  });

  async function parse(response: Response) {
    const suggestions: Suggestion[] = response.data.suggestions;

    async function fetchGeocodeResults(suggestion: Suggestion) {
      if (!geocoder) {
        await geocoderPromise;
      }

      try {
        const dataResponse = await geocoder!.geocode({
          placeId: suggestion.placePrediction.placeId,
        });

        return dataResponse.results;
      } catch (e: any) {
        if (e.code !== 'ZERO_RESULTS') {
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
        suggestions.map((suggestion: Suggestion) => fetchGeocodeResults(suggestion)),
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

  async function search(searchOptions: SearchOptions) {
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

export default customSearchProvider;
