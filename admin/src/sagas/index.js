import { takeEvery, all } from 'redux-saga/effects';

import {
  CRUD_FETCH,
  NOTES_FETCH,
  CRUD_NEW,
  CRUD_UPDATE,
  CRUD_DELETE,
} from '../constants/actionTypes';

import {
  FetchCrud,
  FetchNotes,
  NewCrud,
  UpdateCrud,
  DeleteCrud,
} from './crud';

function* watchAll() {
  // * är en "generator" function...returneras i export..till store...googla
  console.log('watchAll ran');
  yield all([
    takeEvery(CRUD_FETCH, FetchCrud),
    takeEvery(NOTES_FETCH, FetchNotes),
    takeEvery(CRUD_UPDATE, UpdateCrud),
    takeEvery(CRUD_DELETE, DeleteCrud),
    takeEvery(CRUD_NEW, NewCrud),
  ]);
}

export default watchAll;
