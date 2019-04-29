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

function* eraseParfume(action) {
  console.log(action.parfumeId);

  yield axios
    .delete('http://localhost:4000/parfumes/' + action.parfumeId)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

  yield fetchAllData();
}

function* updatingParfume(action) {
  console.log(action.parfumeId);

  yield axios
    .put(
      'http://localhost:4000/parfumes/' +
        action.id +
        '/' +
        action.updatedParfumeContent,
    )
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

  yield fetchAllData();
}

export function* watchGetAll() {
  yield takeLatest('GET_ALL_TABLES', fetchAllData);
  yield takeLatest('ADDING_PARFUME', postParfume);
  yield takeLatest('REMOVE_PARFUME', eraseParfume);
  yield takeLatest('UPDATING_PARFUME', updatingParfume);
}
