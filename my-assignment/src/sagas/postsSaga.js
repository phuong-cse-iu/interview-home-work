import { put, takeEvery } from 'redux-saga/effects';
import { POST } from "../constants";

function* handleAddPost(data) {
    // yield put(addPost(post));
    const newPost = {...data.post, id: '1', owner: 1};
    console.log('new post', newPost);
    yield put({type: POST.ADD_POST_ASYNC, post: newPost});
    // return newPost;
}

export default function* watchAddPost() {
    yield takeEvery(POST.ADD_POST, handleAddPost);
}