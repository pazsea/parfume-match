import { put, call } from 'redux-saga/effects';
// import axios from 'axios';
// import { urlGet, urlDel, urlUpd, urlAdd } from '../api';
import * as a from '../constants/actionTypes';
function* sleep(time) {
  yield new Promise(resolve => setTimeout(resolve, time));
}
//GENERATOR FUNCTION
export function* fetchParfumeState() {
  //   const data = yield call([axios, axios.get], urlGet);
  //   yield put({ type: a.FETCHED_PARFUME_STATE, data });
  yield sleep(3000);
  yield put({ type: a.STATE_FETCH_SUCCESS });
}

// export function* fetchAllData() {
//     const data = yield call([axios, axios.get], urlGet);
//     yield put({ type: a.FETCH_DATA_SUCCESS, payload: data.data });
//   }
