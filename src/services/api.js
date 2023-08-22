import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const defaultParams = {
  key: '38122432-d1b8f090b8220c22915483b4c',
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
}

export async function fetchImages(query, page) {
  const params = {
    ...defaultParams,
    q: query,
    page: page,    
  };
  const response = await axios.get('', {params});
  return response.data;
}

