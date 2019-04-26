function getAllReducer(state = [], action) {
  switch (action.type) {
    case 'GET_ALL_TABLES': {
      return Object.assign(
        {},
        {
          parfumes: action.test,
        },
      );
    }
    default:
      return state;
  }
}

export default getAllReducer;
