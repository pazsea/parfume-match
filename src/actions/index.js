import * as a from '../actionTypes';

export function changeSize(size) {
  return {
    type: a.SIZE,
    size,
  };
}

export function onSetUsers(users) {
  return {
    type: a.USERS_SET,
    users,
  };
}

export function fetchParfumes() {
  return {
    type: a.GET_ALL_TABLES,
  };
}

export function addParfume(parfume) {
  return {
    type: a.ADDING_PARFUME,
    parfume: parfume,
  };
}

export function deleteParfume(parfumeId) {
  return {
    type: a.REMOVE_PARFUME,
    parfumeId: parfumeId,
  };
}

export function updateParfume(sphinx_idx, updatedParfumeContent) {
  return {
    type: a.UPDATING_PARFUME,
    id: sphinx_idx,
    updatedParfumeContent: updatedParfumeContent,
  };
}
