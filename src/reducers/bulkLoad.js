import * as a from '../constants/actionTypes';

const INITIAL_STATE = {
  parfumes: [],
};

function bulkLoadReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.SNIPH_BULK_SUCCESS: {
      return Object.assign(
        {},
        {
          parfumes: action.data.data.parfumes,
        },
      );
    }
    default:
      return state;
  }
}

export default bulkLoadReducer;

// Exempel
// sniphBulkDataState.parfumes.Parfymnnamn
// sniphBulkDataState.collections
// sniphBulkDataState.
