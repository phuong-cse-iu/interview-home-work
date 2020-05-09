import { POST } from "../constants";

const loadPosts = () => ({
  type: POST.LOADING,
});

const setPosts = (posts) => ({
  type: POST.LOAD_SUCCESS,
  posts,
});

const setError = (error) => ({
  type: POST.LOAD_FAILED,
  error,
});

const addPost = post => ({
  type: POST.ADD_POST,
  post
})

export {
  loadPosts,
  setPosts,
  setError,
};