import * as a from '../constants/actionTypes';
import { takeLatest, all } from 'redux-saga/effects';
import { fetchParfumeState } from './fetchParfumeState';

export function* watchAll() {
  yield all([takeLatest(a.STATE_FETCH, fetchParfumeState)]);
}
