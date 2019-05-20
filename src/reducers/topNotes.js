import * as a from '../constants/actionTypes';

const applySetTopNotes = (state, { notes }) => ({
  ...state,
  notes,
});

function topNotesReducer(state = null, action) {
  switch (action.type) {
    case a.TOP_NOTES_SET: {
      return applySetTopNotes(state, action);
    }
    default:
      return state;
  }
}

export default topNotesReducer;
