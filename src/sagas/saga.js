import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllData() {
  const data = yield call(
    [axios, axios.get],
    'http://localhost:4000/parfumes',
  );
  yield put({ type: 'FETCH_DATA_SUCCESS', payload: data.data });
}

function* postParfume(action) {
  console.log(action.parfume);

  yield axios
    .post('http://localhost:4000/parfumes/add', {
      idx: action.parfume,
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

  yield fetchAllData();
}

function* removeFromDatabase({ id }) {
  yield call(
    [axios, axios.delete],
    `http://localhost:4000/parfumes/${id}`,
  );
}

export function* watchGetAll() {
  yield takeLatest('GET_ALL_TABLES', fetchAllData);
  yield takeLatest('ADDING_PARFUME', postParfume);
}
