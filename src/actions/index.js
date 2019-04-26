import axios from 'axios';

export function changeSize(size) {
  return {
    type: 'SIZE',
    size,
  };
}

export function onSetUsers(users) {
  return {
    type: 'USERS_SET',
    users,
  };
}

export function getParfumes() {
  return {
    type: 'GET_ALL_TABLES',
  };
}

export function deleteRow(id) {
  return {
    type: 'REMOVE_ID_FROM_TABLE',
    id,
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
