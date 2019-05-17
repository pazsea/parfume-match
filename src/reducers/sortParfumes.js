import * as a from '../constants/actionTypes';

const noteState = [
  { name: 'ALDEHYDE' },
  { name: 'POWDERY' },
  { name: 'ANIMALIC' },
  { name: 'MUSK' },
  { name: 'AQUATIC' },
  { name: 'HERBACIOUS' },
  { name: 'BEVERAGES' },
  { name: 'CITRIC' },
  { name: 'EARTHY' },
  { name: 'GRAIN' },
  { name: 'FLORAL' },
  { name: 'FRUITY' },
  { name: 'GOURMANDY' },
  { name: 'MOSSY' },
  { name: 'GREEN' },
  { name: 'RESINOUS' },
  { name: 'LEATHER' },
  { name: 'TEXTILE' },
  { name: 'SYNTHETIC' },
  { name: 'AMBER' },
  { name: 'ORIENTAL' },
  { name: 'BALSAMIC' },
  { name: 'MINERAL' },
  { name: 'SPICY' },
  { name: 'TOBBACO' },
  { name: 'WOODY' },
  { name: 'SMOKY' },
  { name: 'TEA' },
  { name: 'ALCOHOLIC DISTILLED' },
  { name: 'ALCOHOLIC ERMENTED' },
  { name: 'MEATY' },
  { name: 'SPRING' },
  { name: 'LEMON' },
];

const sortingParfumes = (state, action) => {
  const nestedParfumes = action.data.data.parfumes;

  //   // Reduce tar en accumilator och själva loopade objektet i arrayen (parfume)
  // const reduceData = data[0].parfumes.reduce((acc, parfume) => {
  //   // Sen sätter vi acc[col__name] till antingen sig själv eller en tom array.
  //   // Alltså finns inte col__name i accumilatorn så skapar vi en tom array
  //   // Annars låter vi den vara som den är
  //   acc[parfume["col__name"]] = acc[parfume["col__name"]] || [];
  //   // Nu vet vi att col__name finns i accumilatorn som en array.
  //   // Så nu är det bara att pusha in nästa item (parfume) i arrayen
  //   acc[parfume["col__name"]].push(parfume);
  //   // Sist så returnerar vi acc för att den ska beålla värdet av acc till nästa loop
  //   // samt så vi får ut värdet i variabeln reduceData när den gått klart.
  //   return acc;
  // }, {}); // som andra argument bestäms första värdet av acc

  var sortedParfumes = nestedParfumes.reduce(function(r, a) {
    r[a['col_name']] = r[a['col_name']] || [];
    r[a['col_name']].push(a);

    return r;
  }, {});

  const perfumesList = Object.keys(sortedParfumes).map(key => {
    var newParfumes = sortedParfumes[key].map(perf => ({
      ...perf,
      base_note_id: noteState[perf.base_note_id].name,
      heart_note_id: noteState[perf.heart_note_id].name,
      top_note_id: noteState[perf.top_note_id].name,
    }));

    return {
      [key]: newParfumes,
    };
  });

  const object = Object.assign({}, ...perfumesList);

  return {
    ...object,
  };
};

function sortParfumeReducer(state = noteState, action) {
  switch (action.type) {
    case a.SNIPH_SORT_PARFUMES: {
      return sortingParfumes(state, action);
    }
    default:
      return state;
  }
}

export default sortParfumeReducer;
