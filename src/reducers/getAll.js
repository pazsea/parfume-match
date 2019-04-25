function getAllReducer(state = [], action) {
  switch (action.type) {
    case 'GET_ALL_TABLES': {
      return Object.assign(
        {},
        {
          data: action.parfumes,
        },
      );
    }
    default:
      return state;
  }
}

export default getAllReducer;
