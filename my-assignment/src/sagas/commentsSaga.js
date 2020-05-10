import { call, put, takeEvery } from 'redux-saga/effects';
import { setComments } from '../actions/comment';
import { fetchComments } from '../api';
import { COMMENT } from '../constants';

function* handleFetchComments() {
    const comments = yield call(fetchComments);
    yield put(setComments(comments));
}

export default function* watchPosts() {
  yield takeEvery(COMMENT.FETCH_COMMENTS, handleFetchComments);
};
