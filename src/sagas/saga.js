import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllData() {
  const data = yield call(
    [axios, axios.get],
    'http://localhost:4000/parfumes',
  );
  yield put({ type: 'FETCH_DATA_SUCCESS', payload: data.data });
}

// function* removeFromDatabase({ id }) {
//   yield call(
//     [axios, axios.delete],
//     `http://localhost:4000/parfumes/${id}`,
//   );
// }

export function* watchGetAll() {
  yield takeLatest('GET_ALL_TABLES', fetchAllData);
  // yield takeLatest('REMOVE_ID_FROM_TABLE', removeFromDatabase);
}
