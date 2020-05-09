import { all } from 'redux-saga/effects';
import postsSaga from './postsSaga';
import watchErrors from './errorSaga';

export default function* rootSaga() {
    yield all([postsSaga()]);
}
