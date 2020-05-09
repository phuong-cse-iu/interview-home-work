import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import postsReducer from './postsReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['posts'],
}

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  posts: postsReducer,
});

export default persistReducer(persistConfig, rootReducer);
