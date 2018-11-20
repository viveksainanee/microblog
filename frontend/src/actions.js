import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GOT_TITLES,
  GOT_POST
} from './actionTypes.js';
import axios from 'axios';

const BASEURL = 'http://localhost:5000';

export function getTitlesFromAPI() {
  return async function(dispatch) {
    let titles = await axios.get(`${BASEURL}/api/posts`);
    dispatch(gotTitles(titles.data));
  };
}

function gotTitles(payload) {
  return {
    type: GOT_TITLES,
    payload
  };
}

export function getPostFromAPI(id) {
  return async function(dispatch) {
    let post = await axios.get(`${BASEURL}/api/posts/${id}`);
    dispatch(gotPost(post.data));
  };
}

function gotPost(payload) {
  return {
    type: GOT_POST,
    payload
  };
}

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

export function addComment(payload) {
  return {
    type: ADD_COMMENT,
    payload
  };
}

export function deleteComment(payload) {
  return {
    type: DELETE_COMMENT,
    payload
  };
}
