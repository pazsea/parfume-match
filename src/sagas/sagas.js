import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { urlGet, urlDel, urlUpd, urlAdd } from '../api';
import * as a from '../actionTypes';

export function* fetchAllData() {
  const data = yield call([axios, axios.get], urlGet);
  yield put({ type: a.FETCH_DATA_SUCCESS, payload: data.data });
}

export function* postParfume(action) {
  yield axios
    .post(urlAdd, {
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

export function* eraseParfume(action) {
  yield axios
    .delete(urlDel + action.parfumeId)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

  yield fetchAllData();
}

export function* updatingParfume(action) {
  yield axios
    .put(urlUpd + action.id + '/' + action.updatedParfumeContent)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });

  yield fetchAllData();
}
