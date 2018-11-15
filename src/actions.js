import { ADD_POST, UPDATE_POST, DELETE_POST } from './actionTypes.js';

export function addPost(payload) {
  return {
    type: ADD_POST,
    payload
  };
}

export function updatePost(payload) {
  return {
    type: UPDATE_POST,
    payload
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    id
  };
}
