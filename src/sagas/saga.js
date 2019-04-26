// import '../runtime';

import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllData() {
  const data = yield call(
    [axios, axios.get],
    'http://localhost:4000/parfumes',
  );
  yield put({ type: 'FETCH_DATA_SUCCESS', payload: data.data });
}

export function* watchGetAll() {
  yield takeEvery('GET_ALL_TABLES', fetchAllData);
}
