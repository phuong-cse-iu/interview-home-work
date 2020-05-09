import { put, takeEvery } from 'redux-saga/effects';
import { FORM } from "../constants";
import random from '../utils/number';

function* handleError() {
    yield put({type: FORM.ERROR_ASYNC, error: 'Form fields missing'});
}

export default function* watchErrors() {
    yield takeEvery(FORM.ERROR, handleError);
}