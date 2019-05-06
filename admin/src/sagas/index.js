import { takeEvery, all } from 'redux-saga/effects';
import { CRUD_FETCH, CRUD_UPDATE, CRUD_DELETE, CRUD_NEW } from '../constants/actionTypes';


import { FetchCrud, UpdateCrud, DeleteCrud, NewCrud } from './crud';

function *watchAll() {   // * är en "generator" function...returneras i export..till store...googla
console.log("watchAll ran")  
yield all([
    
    takeEvery(CRUD_FETCH, FetchCrud),
    takeEvery(CRUD_UPDATE, UpdateCrud),
    takeEvery(CRUD_DELETE, DeleteCrud),
    takeEvery(CRUD_NEW, NewCrud),
  ])

}

export default watchAll;