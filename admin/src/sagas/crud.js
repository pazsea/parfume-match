import { call, put } from 'redux-saga/effects';
import { doFetchAddCrud, doFetchAddNotes } from '../actions/crud';
import {
  fetchCrud,
  fetchNotes,
  newCrud,
  updateCrud,
  deleteCrud,
} from '../api/crud';

function* FetchCrud(action) {
  const { query } = action;
  const result = yield call(fetchCrud, query);
  yield put(doFetchAddCrud(result));
}

function* FetchNotes(action) {
  const { query } = action;
  const result = yield call(fetchNotes, query);
  yield put(doFetchAddNotes(result));
}

function* UpdateCrud(action) {
  const { query } = action;
  const message = yield call(updateCrud, query);
  console.log(message);
  const result = yield call(fetchCrud, query);
  yield put(doFetchAddCrud(result));
}
function* NewCrud(action) {
  const { query } = action;
  const message = yield call(newCrud, query);
  console.log('Message from New CRUD: ' + message);
  const result = yield call(fetchCrud, query);
  yield put(doFetchAddCrud(result));
}
function* DeleteCrud(action) {
  const { query } = action;
  let result = yield call(deleteCrud, query);
  console.log('New CRUD: ' + result);
  result = yield call(fetchCrud, query);
  yield put(doFetchAddCrud(result));
}

export { FetchCrud, FetchNotes, NewCrud, UpdateCrud, DeleteCrud };
