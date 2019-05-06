import { combineReducers } from 'redux';

import crudReducer from './crud';

const rootReducer = combineReducers({
  
  crudState: crudReducer,
});

export default rootReducer;