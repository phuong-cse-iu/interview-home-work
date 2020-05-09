import { POST } from "../constants"

const postsReducer = (state = [], action) => {
  console.log('reducer', action);
  switch (action.type) {
    case POST.ADD_POST_ASYNC:
      return [...state, action.post];
    default:
      return state;
  }
};

export default postsReducer;