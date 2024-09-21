import axios from 'axios';

export const fetchImages = async (value, page, controller) => {
  const API_KEY = '43844595-87d51955a21ac5c6d4436d598';
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`,
    { signal: controller.signal }
  );
  return response.data;
};
