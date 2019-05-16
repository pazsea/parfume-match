import { NOTES_FETCH_ADD } from '../constants/actionTypes';

const INITIAL_STATE = [];

const applyAddNotes = (state, action) => action.id;

function notesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NOTES_FETCH_ADD: {
      return applyAddNotes(state, action);
    }
    default:
      return state;
  }
}

export default notesReducer;
