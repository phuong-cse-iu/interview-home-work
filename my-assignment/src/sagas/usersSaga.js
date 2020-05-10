import { call, put, takeEvery } from 'redux-saga/effects';
import { setUsers } from '../actions/user';
import { fetchUsers } from '../api';
import { USER } from '../constants';

function* handleFetchUsers() {
  const users = yield call(fetchUsers);
  yield put(setUsers(users));
}

export default function* watchPosts() {
  yield takeEvery(USER.FETCH_USERS, handleFetchUsers);
}
