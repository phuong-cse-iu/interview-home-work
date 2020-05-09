import { POST } from '../constants';

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST.ADD_POST:
      return { ...state, posts: [...state.posts, action.post] };
    case POST.LOAD_SUCCESS:
      // Since we persist posts inside local storage, we need to de-duplicate posts that already exist
      const ids = new Set(state.posts.map((post) => post.id));
      const addedPosts = [
        ...state.posts,
        ...action.posts.filter((post) => !ids.has(post.id)),
      ];

      return { ...state, posts: addedPosts };
    default:
      return state;
  }
};

export default postsReducer;
