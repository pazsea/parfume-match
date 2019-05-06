import { call, put } from 'redux-saga/effects';
import { doFetchAddCrud } from '../actions/crud';
import { fetchCrud, updateCrud, newCrud, deleteCrud } from '../api/crud';

function* FetchCrud(action) {
  const { query } = action;  
  const result = yield call(fetchCrud, query);  
  yield put(doFetchAddCrud(result));
}

function* UpdateCrud(action) {  
  
  const { query } = action;
  yield call(updateCrud, query);
  
  const result = yield call(fetchCrud, query);  
  yield put(doFetchAddCrud(result));
  
}
function* NewCrud(action) {
  
  const { query } = action;
  yield call(newCrud, query);
  console.log('New CRUD: ')
  const result = yield call(fetchCrud, query);  
  yield put(doFetchAddCrud(result));
}
function* DeleteCrud(action) {
    
    const { query } = action;
    let result = yield call(deleteCrud, query)
    console.log('New CRUD: ' + result)
    result = yield call(fetchCrud, query);  
  yield put(doFetchAddCrud(result));
}


export {
  FetchCrud, UpdateCrud, NewCrud, DeleteCrud
};