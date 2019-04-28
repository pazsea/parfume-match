import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllData() {
  const data = yield call(
    [axios, axios.get],
    'http://localhost:4000/parfumes',
  );
  yield put({ type: 'FETCH_DATA_SUCCESS', payload: data.data });
}

function postAxios() {
  axios
    .post('/parfumes/add', { idx: 100 })
    .then(function(response) {
      console.log(response); // igen
    })
    .catch(function(error) {
      console.log(error);
    });
} // typ sådär, men hur vi ska kalla på den osv i saga osv är lite beyond me. Det vet jag. Så vi behöver inte gå igenom det
// vi kan lägga denna funktion på knappen direkt i home istället.. Om det är enklare -- aa gör't.
// testa igen ok same error

// Så fetch funkar bra. Min reducer fångar upp detta . Men hur skulle jag göra en post t.ex..
// function* removeFromDatabase({ id }) { // mm, bra fråga. 1 sek!
//   yield call(
//     [axios, axios.delete],
//     `http://localhost:4000/parfumes/${id}`,
//   );
// }

export function* watchGetAll() {
  yield takeLatest('GET_ALL_TABLES', fetchAllData);
  // yield takeLatest('REMOVE_ID_FROM_TABLE', removeFromDatabase);
}
