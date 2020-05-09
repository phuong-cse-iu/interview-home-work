import { call, put, takeEvery } from 'redux-saga/effects';
import { setError, setPosts } from '../actions/post';
import { fetchPost } from '../api';
import { POST } from "../constants";

function* handleFetchPosts() {
    try {
        const posts = yield call(fetchPost);
        yield put(setPosts(posts));
    } catch (error) {
        // dispatch error
        yield put(setError(error.toString()));
    }
}

export default function* watchPosts() {
    yield takeEvery(POST.FETCH_POST, handleFetchPosts);
}