import request from '../utils/http';
import posts from '../data/posts.json';
import users from '../data/users.json';
import comments from '../data/comments.json';
import { POST_URI, USER_URI, COMMENT_URI } from '../constants/url';

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

const fetchUsers = async () => {
  const response = await request(USER_URI, {
    method: 'GET',
  });
  const data = response && response.data;

  if (response && response.status >= 400) {
    throw new Error(data.errors);
  }

  return data || users;
};

const fetchComments = async () => {
  const response = await request(COMMENT_URI, {
    method: 'GET',
  });
  const data = response && response.data;

  if (response && response.status >= 400) {
    throw new Error(data.errors);
  }

  return data || comments;
};

export { fetchPost, fetchUsers, fetchComments };
