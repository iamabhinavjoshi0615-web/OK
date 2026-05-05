// Free ExerciseDB API — no key required
export const EXERCISE_DB_URL = 'https://exercisedb.dev/api/v1';

// YouTube search via RapidAPI (still needs a key)
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

/**
 * Generic fetch helper.
 * Returns the parsed JSON on success, or null on any network / HTTP error.
 */
export const fetchData = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      // eslint-disable-next-line no-console
      console.warn(`API error ${res.status} for ${url}`);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Network error:', err.message);
    return null;
  }
};
