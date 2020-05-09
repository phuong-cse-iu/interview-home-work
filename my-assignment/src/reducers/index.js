import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import postsReducer from './postsReducer';
import filteredReducer from './filteredReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['postsData'],
}

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  error: errorReducer,
  postsData: postsReducer,
  filter: filteredReducer
});

export default persistReducer(persistConfig, rootReducer);
