import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import postsReducer from './postsReducer';
import filteredReducer from './filteredReducer';
import userReducer from './userReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['postsData', 'user'],
}

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  postsData: postsReducer,
  filter: filteredReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
