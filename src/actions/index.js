import axios from 'axios';

export function changeSize(size) {
  return {
    type: 'SIZE',
    size,
  };
}

export function getParfumes() {
  return dispatch => {
    return (
      axios
        .get('http://localhost:4000/parfumes')
        //   .then(response => console.log(response))
        .then(response => {
          dispatch(loadParfumesAction(response.data));
        })
    );
  };
}

export function loadParfumesAction({ parfumes }) {
  console.log(parfumes);
  return {
    type: 'GET_ALL_TABLES',
    parfumes,
  };
}

// export function bindComments(postId) {

//     return function (dispatch){
//       return API.fetchComments(postId).then(comments => {
//       // dispatch
//         dispatch( {
//           type: BIND_COMMENTS,
//           comments,
//           postId
//         })
//       })
//     }
//    }
