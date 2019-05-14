import * as a from '../constants/actionTypes';

const INITIAL_STATE = {
  parfumes: [],
};

function bulkLoadReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.SNIPH_BULK_SUCCESS: {
      return Object.assign(
        {},
        {
          parfumes: action.data.data.parfumes,
        },
      );
    }
    default:
      return state;
  }
}

// export const exportToFirebase = () => async dispatch => {
//   todosRef.on('value', snapshot => {
//     dispatch({
//       type: a.SNIPH_BULK_SUCCESS,
//       db: snapshot.val(),
//     });
//   });
// };

export default bulkLoadReducer;

// Exempel
// sniphBulkDataState.parfumes.Parfymnnamn
// sniphBulkDataState.collections
