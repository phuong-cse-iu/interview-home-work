import { all } from 'redux-saga/effects';
import postsSaga from './postsSaga';
import usersSaga from './usersSaga';

export default function* rootSaga() {
    yield all([postsSaga(), usersSaga()]);
}
