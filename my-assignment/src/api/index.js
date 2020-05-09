import request from '../utils/http';
import posts from '../data/posts.json';

const fetchPost = async () => {
//   const response = await request('');
//   const data = await response.json();

//   if (response.status >= 400) {
//     throw new Error(data.errors);
//   }

  return posts;
};

export { fetchPost };
