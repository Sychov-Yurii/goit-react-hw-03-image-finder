import axios, { Axios } from 'axios';

const API_KEY = '40315938-f4b95c5c15917d8c0c53825d3';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`per_page=${page}&page=${page}&q=${query}`);
  return data;
};

export default getImages;
