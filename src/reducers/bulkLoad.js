import * as a from '../constants/actionTypes';

const INITIAL_STATE = {
  bulkData: [],
};

function bulkLoadReducer(state = INITIAL_STATE, data) {
  switch (data.type) {
    case a.SNIPH_BULK_SUCCESS: {
      return Object.assign(
        {},
        {
          bulkData: data,
        },
      );
    }
    default:
      return state;
  }
}

export default bulkLoadReducer;
