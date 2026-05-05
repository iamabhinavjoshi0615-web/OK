export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    // eslint-disable-next-line no-console
    console.warn(`API error ${res.status} for ${url}`);
    return null;
  }

  const data = await res.json();

  // Some RapidAPI error payloads come back as objects, not arrays
  return Array.isArray(data) ? data : null;
};
