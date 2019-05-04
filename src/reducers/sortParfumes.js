import * as a from '../constants/actionTypes';

const sortingParfumes = (state, action) => {
  const nestedParfumes = action.data.data.parfumes;

  var sortedParfumes = nestedParfumes.reduce(function(r, a) {
    r[a['col_name']] = r[a['col_name']] || [];
    r[a['col_name']].push(a);

    return r;
  }, {});

  return {
    ...sortedParfumes,
  };
};

function sortParfumeReducer(state = null, action) {
  switch (action.type) {
    case a.SNIPH_SORT_PARFUMES: {
      return sortingParfumes(state, action);
    }
    default:
      return state;
  }
}

export default sortParfumeReducer;
