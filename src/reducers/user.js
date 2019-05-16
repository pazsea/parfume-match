import * as a from '../constants/actionTypes';

const INITIAL_STATE = {
  users: null,
};

const applySetUsers = (state, action) => ({
  ...state,
  users: action.users,
});

const applySetUser = (state, action) => ({
  ...state,
  users: {
    ...state.users,
    [action.uid]: action.user,
  },
});

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.USERS_SET: {
      return applySetUsers(state, action);
    }
    case a.USER_SET: {
      return applySetUser(state, action);
    }
    default:
      return state;
  }
}

export default userReducer;
