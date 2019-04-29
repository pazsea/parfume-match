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

export function fetchParfumes() {
  return {
    type: 'GET_ALL_TABLES',
  };
}

export function addParfume(parfume) {
  return {
    type: 'ADDING_PARFUME',
    parfume: parfume,
  };
}

export function deleteParfume(parfumeId) {
  return {
    type: 'REMOVE_PARFUME',
    parfumeId: parfumeId,
  };
}

export function updateParfume(id, updatedParfumeContent) {
  console.log('I MIN ACTION' + updatedParfumeContent);
  return {
    type: 'UPDATING_PARFUME',
    id: id,
    updatedParfumeContent: updatedParfumeContent,
  };
}

// export function deleteRow(id) {
//   return {
//     type: 'REMOVE_ID_FROM_TABLE',
//     id,
//   };
// }

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
