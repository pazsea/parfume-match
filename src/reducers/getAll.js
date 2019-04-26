function getAllReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS': {
      return Object.assign(
        {},
        {
          parfumes: action.payload.test,
        },
      );
    }
    default:
      return state;
  }
}

export default getAllReducer;
