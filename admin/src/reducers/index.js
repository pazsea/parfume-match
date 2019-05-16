import { combineReducers } from 'redux';

import crudReducer from './crud';
import notesReducer from './notes';

const rootReducer = combineReducers({
  crudState: crudReducer,
  notesState: notesReducer,
});

export default rootReducer;
