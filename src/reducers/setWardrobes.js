import * as a from '../constants/actionTypes';

function sortingWardrobes(state, action) {
  const userList = Object.keys(action.otherNotes);
  let resultObject = {};
  userList.forEach(user => {
    const topNotes = action.otherNotes[user];
    // console.log(user + " has " + topNotes)
    // console.log("====")

    const matchFrequency = topNotes.reduce((notes, value) => {
      //Det är här det går åt helvete
      if (action.myNotes.includes(value)) {
        notes[user] = notes[user] ? notes[user] + 1 : 1;
      }
      //       //notes[value] = notes[value] ? notes[value] + 1 : 1;
      return notes;
    }, {});

    resultObject[user] = matchFrequency[user];
  });

  Object.keys(resultObject).forEach(
    key => !resultObject[key] && delete resultObject[key],
  );
  var keys = Object.keys(resultObject);

  var sort = keys.sort(function(a, b) {
    return resultObject[a] - resultObject[b];
  });

  return sort.reverse().slice(0, 4);
}

function setWardrobeReducer(state = null, action) {
  switch (action.type) {
    case a.SET_SIMILAR_WARDROBES: {
      return sortingWardrobes(state, action);
    }
    default:
      return state;
  }
}

export default setWardrobeReducer;
