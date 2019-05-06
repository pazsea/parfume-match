import {
    CRUD_FETCH_ADD,
    CRUD_FETCH,
    CRUD_UPDATE,
    CRUD_DELETE,
    CRUD_NEW,
  } from '../constants/actionTypes';
  
  const doFetchAddCrud = id => ({
    type: CRUD_FETCH_ADD,
    id,
  });
  
  
  const doFetchCrud = query => ({
    type: CRUD_FETCH,
    query,
  });

  const doUpdateCrud = query => ({
    type: CRUD_UPDATE,
    query,
  });

  const doDeleteCrud = query => ({
    type: CRUD_DELETE,
    query,
  });

  const doNewCrud = query => ({
    type: CRUD_NEW,
    query,
  });

  
  export {
    doFetchAddCrud,
    doFetchCrud,
    doUpdateCrud,
    doDeleteCrud,
    doNewCrud,
  };