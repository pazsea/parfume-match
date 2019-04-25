import { takeEvery } from 'redux-saga/effects';

function* getAllData() {
  console.log('heeelooo from getAll DATA');
}

export function* watchGetAll() {
  yield takeEvery('GET_ALL_TABLES', getAllData);
}
