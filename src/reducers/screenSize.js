const INITIAL_STATE = {
  bigSize: false,
  mediumSize: false,
  smallSize: false,
};

function sreenSizeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'BIG_SIZE':
      return {
        bigSize: true,
        mediumSize: false,
        smallSize: false,
      };
    case 'MEDIUM_SIZE':
      return {
        bigSize: false,
        mediumSize: true,
        smallSize: false,
      };
    case 'SMALL_SIZE':
      return {
        bigSize: false,
        mediumSize: false,
        smallSize: true,
      };
    default:
      return state;
  }
}

export default sreenSizeReducer;
