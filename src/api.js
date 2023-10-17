import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getGallery = async () => {
  const API_KEY = '40095874-b5c4c3ccb4b604f2bda494f4f';
  const response = await axios.get(
    '?q=cat&page=1&key=40095874-b5c4c3ccb4b604f2bda494f4f&image_type=photo&orientation=horizontal&per_page=12'
  );
  return response.data;
};
