import * as a from '../constants/actionTypes';

// const noteState = [
//   { id: '1', name: 'ALDEHYDE' },
//   { id: '2', name: 'POWDERY' },
//   { id: '3', name: 'ANIMALIC' },
//   { id: '4', name: 'MUSK' },
//   { id: '5', name: 'AQUATIC' },
//   { id: '6', name: 'HERBACIOUS' },
//   { id: '7', name: 'BEVERAGES' },
//   { id: '8', name: 'CITRIC' },
//   { id: '9', name: 'EARTHY' },
//   { id: '10', name: 'GRAIN' },
//   { id: '11', name: 'FLORAL' },
//   { id: '12', name: 'FRUITY' },
//   { id: '13', name: 'GOURMANDY' },
//   { id: '14', name: 'MOSSY' },
//   { id: '15', name: 'GREEN' },
//   { id: '16', name: 'RESINOUS' },
//   { id: '17', name: 'LEATHER' },
//   { id: '18', name: 'TEXTILE' },
//   { id: '19', name: 'SYNTHETIC' },
//   { id: '20', name: 'AMBER' },
//   { id: '21', name: 'ORIENTAL' },
//   { id: '22', name: 'BALSAMIC' },
//   { id: '23', name: 'MINERAL' },
//   { id: '24', name: 'SPICY' },
//   { id: '25', name: 'TOBBACO' },
//   { id: '26', name: 'WOODY' },
//   { id: '27', name: 'SMOKY' },
//   { id: '28', name: 'TEA' },
//   { id: '29', name: 'ALCOHOLIC_DISTILLED' },
//   { id: '30', name: 'ALCOHOLIC_FERMENTED' },
//   { id: '31', name: 'NON_CLASSIFIED' },
//   { id: '32', name: 'UNKNOWN' },
//   { id: '33', name: 'UNKNOWN' },
// ];

const sortingParfumes = (state, action) => {
  const nestedParfumes = action.data.data.parfumes;

  var sortedParfumes = nestedParfumes.reduce(function(r, a) {
    r[a['col_name']] = r[a['col_name']] || [];
    r[a['col_name']].push(a);

    return r;
  }, {});

  // var addNotes = sortedParfumes.forEach(note => {
  //   note.base_note_id = state[note.base_note_id].name;
  // });

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
