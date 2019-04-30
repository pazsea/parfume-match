import * as a from '../actionTypes';
import {
  fetchAllData,
  postParfume,
  eraseParfume,
  updatingParfume,
} from './sagas';
import { takeLatest, all } from 'redux-saga/effects';

export function* watchGetAll() {
  yield all([
    takeLatest(a.GET_ALL_TABLES, fetchAllData),
    takeLatest(a.ADDING_PARFUME, postParfume),
    takeLatest(a.REMOVE_PARFUME, eraseParfume),
    takeLatest(a.UPDATING_PARFUME, updatingParfume),
  ]);
}
