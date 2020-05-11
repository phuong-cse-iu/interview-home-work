import { COMMENT } from '../constants';

const intialState = {
    comments: []
}

export default (state = intialState, action) => {
  switch (action.type) {
    case COMMENT.ADD_COMMENT:
      return {...state, comments: [...state.comments, action.comment]};
    case COMMENT.FETCH_COMMENT_SUCCESS:
      // Since we persist posts inside local storage, we need to de-duplicate comments that already exist
      const ids = new Set(state.comments.map((comment) => comment.id));
      const newlyComments = [
        ...state.comments,
        ...action.comments.filter((comment) => !ids.has(comment.id)),
      ];
      return { ...state, comments: [...newlyComments] };
    default:
      return state;
  }
};
