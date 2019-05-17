import * as a from '../constants/actionTypes';

const INITIAL_STATE = {
  myWardrobe: null,
};

const applySetWardrobe = (state, { wardrobe }) => ({
  ...state,
  myWardrobe: wardrobe,
});

function wardrobeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.WARDROBE_USER_SET: {
      return applySetWardrobe(state, action);
    }
    default:
      return state;
  }
}

export default wardrobeReducer;
