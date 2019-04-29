function fetchParfumeReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS': {
      return Object.assign(
        {},
        {
          parfumes: action.payload.parfumes,
        },
      );
    }
    default:
      return state;
  }
}

export default fetchParfumeReducer;
