import * as a from '../constants/actionTypes';

const INITIAL_STATE = {
  stateFetched: false,
};

function loadStatusReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.STATE_FETCH_SUCCESS: {
      return Object.assign(
        {},
        {
          stateFetched: true,
        },
      );
    }
    default:
      return state;
  }
}

export default loadStatusReducer;
