import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { urlGet } from '../api';
import * as a from '../constants/actionTypes';

export function* fetchParfumeState() {
  const data = yield call([axios, axios.get], urlGet);
  yield put({ type: a.SNIPH_BULK_SUCCESS, data });
  yield put({ type: a.SNIPH_SORT_PARFUMES, data });

  // yield sleep(3000);
  yield put({ type: a.STATE_FETCH_SUCCESS });
}
