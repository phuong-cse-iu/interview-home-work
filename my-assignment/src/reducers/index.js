import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  posts: postsReducer
});

export default rootReducer;