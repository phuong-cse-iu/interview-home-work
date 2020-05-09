import request from '../utils/http';
import posts from '../data/posts.json';

const fetchPost = async () => {
  const response = await request('http://localhost:5000/api/v1/posts/', {
    method: 'GET',
  });
  const data = response && response.data;

  if (response && response.status >= 400) {
    throw new Error(data.errors);
  }

  return data || posts;
};

export { fetchPost };
