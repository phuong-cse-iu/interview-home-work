import request from '../utils/http';
import posts from '../data/posts.json';
import {POST_URI} from '../constants/url';

const fetchPost = async () => {
  const response = await request(POST_URI, {
    method: 'GET',
  });
  const data = response && response.data;

  if (response && response.status >= 400) {
    throw new Error(data.errors);
  }

  return data || posts;
};

export { fetchPost };
