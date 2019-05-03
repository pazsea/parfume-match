import * as a from '../constants/actionTypes';

// const INITIAL_STATE = {
//   parfumes: [],
// };

const sortingParfumes = (state, action) => {
  const nestedParfumes = action.data.data.parfumes;
  const aesthetic = [];
  const avantGarde = [];
  const femaleClassics = [];
  const clean = [];
  const trendingNow = [];
  const workplay = [];

  nestedParfumes.forEach(parf =>
    parf.col_name === 'FÖR MÄN: Aesthetic'
      ? aesthetic.push(parf)
      : parf.col_name === 'Avant-Garde'
      ? avantGarde.push(parf)
      : parf.col_name === 'Female Classics'
      ? femaleClassics.push(parf)
      : parf.col_name === 'Clean'
      ? clean.push(parf)
      : parf.col_name === 'Trending Now'
      ? trendingNow.push(parf)
      : parf.col_name === 'FÖR MÄN: Work/Play'
      ? workplay.push(parf)
      : null,
  );
  return {
    sortedParfumes: {
      aesthetic: aesthetic,
      avantGarde: avantGarde,
      femaleClassics: femaleClassics,
      clean: clean,
      trendingNow: trendingNow,
      workPlay: workplay,
    },
  };
};

// const applySetUser = (state, action) => ({
//     ...state,
//     users: {
//       ...state.users,
//       [action.uid]: action.user,
//     },
//   });

function sortParfumeReducer(state = null, action) {
  switch (action.type) {
    case a.SNIPH_SORT_PARFUMES: {
      return sortingParfumes(state, action);
    }
    default:
      return state;
  }
}

//   parfumes: action.data.data.parfumes,

// export const exportToFirebase = () => async dispatch => {
//   todosRef.on('value', snapshot => {
//     dispatch({
//       type: a.SNIPH_BULK_SUCCESS,
//       db: snapshot.val(),
//     });
//   });
// };

export default sortParfumeReducer;

// Exempel
// sniphBulkDataState.parfumes.Parfymnnamn
// sniphBulkDataState.collections
