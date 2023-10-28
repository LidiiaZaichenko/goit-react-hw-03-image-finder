import axios from 'axios';

const API_KEY = '40095874-b5c4c3ccb4b604f2bda494f4f';
const BASE_URL = 'https://pixabay.com/api/?';
const params = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const fetchImages = async (page,q) => {
  const response = await axios.get(`${BASE_URL}${params}&page=${page}&q=${q}`);
  return response.data;
};
