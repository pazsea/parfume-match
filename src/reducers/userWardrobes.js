import * as a from '../constants/actionTypes';

const applySetWardrobes = (state, { wardrobes }) => ({
  ...wardrobes,
});

function wardrobeReducer(state = null, action) {
  switch (action.type) {
    case a.WARDROBES_USERS_SET: {
      return applySetWardrobes(state, action);
    }
    default:
      return state;
  }
}

export default wardrobeReducer;
