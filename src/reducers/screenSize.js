const INITIAL_STATE = {
  bigSize: false,
  mediumSize: false,
  smallSize: false,
};

// const applyBigSize = (state, action) => ({
//   ...state,
//   messages: action.messages,
// });

// const applyMediumSize = (state, action) => ({
//   ...state,
//   limit: action.limit,
// });

// const applySmallSize = (state, action) => ({
//   ...state,
//   limit: action.limit,
// });

function sreenSizeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'BIG_SIZE':
      return {
        ...state,
        bigSize: true,
      };
    case 'MEDIUM_SIZE':
      return {
        ...state,
        mediumSize: true,
      };
    case 'SMALL_SIZE':
      return {
        ...state,
        smallSize: true,
      };
    default:
      return state;
  }
}

export default sreenSizeReducer;
