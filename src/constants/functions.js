export function calculatePoints(next, prev) {
  if (next > prev) {
    const addition = next - prev;
    return addition;
  } else if (next < prev) {
    const subtract = next - prev;
    return subtract;
  } else if (next === prev) {
    return 0;
  }
}

export function getKeysWithHighestValue(o, n) {
  if (o) {
    var keys = Object.keys(o);
    keys.sort(function(a, b) {
      return o[b] - o[a];
    });
    return keys.slice(0, n);
  }
}

// var array1 = ["MUSK", "LEMON", "CITRIC"];

// var usersState = {
//   users: {
//     karin: {
//       topNotes: ["CITRIC", "ALCOHOL", "CIGARR"]
//     },
//     johan: {
//       name: ["HyperJohan"]
//     },
//     tina: {
//       topNotes: ["MUSK", "LEMON", "CITRIC"]
//     },
//     gustav: {
//       topNotes: ["UNGO", "HELLO", "SHIT"]

//   }}}

export function getTopWardrobes(myNotes, otherNotes) {
  const userList = Object.keys(otherNotes);
  let resultObject = {};
  userList.forEach(user => {
    const topNotes = otherNotes[user];
    // console.log(user + " has " + topNotes)
    // console.log("====")
    const matchFrequency = topNotes.reduce((notes, value) => {
      if (myNotes.includes(value)) {
        notes[user] = notes[user] ? notes[user] + 1 : 1;
      }
      //       //notes[value] = notes[value] ? notes[value] + 1 : 1;
      return notes;
    }, {});

    resultObject[user] = matchFrequency[user];
  });

  var keys = Object.keys(resultObject);

  var sort = keys.sort(function(a, b) {
    return resultObject[a] - resultObject[b];
  });

  return sort.slice(0, 5);
}
