import * as a from '../constants/actionTypes';

function sreenSizeReducer(state = null, action) {
  switch (action.type) {
    case a.SIZE: {
      return Object.assign(
        {},
        {
          [action.size]: true,
        },
      );
    }
    default:
      return state;
  }
}

export default sreenSizeReducer;
