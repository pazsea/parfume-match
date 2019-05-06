import { CRUD_FETCH_ADD } from '../constants/actionTypes';

const INITIAL_STATE = [];

const applyAddCrud = (state, action) =>
  action.id;

function crudReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CRUD_FETCH_ADD : {
      return applyAddCrud(state, action);
    }
    default : return state;
  }
}

export default crudReducer;