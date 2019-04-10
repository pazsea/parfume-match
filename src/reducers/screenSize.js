function sreenSizeReducer(state = null, action) {
  switch (action.type) {
    case 'SIZE': {
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
