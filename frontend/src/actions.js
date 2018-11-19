import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GOT_POSTS
} from './actionTypes.js';
import axios from 'axios';

const BASEURL = 'http://localhost:5000';

export function getPostsFromAPI() {
  return async function(dispatch) {
    let posts = await axios.get(`${BASEURL}/api/posts`);
    console.log('Hey Vivek, this is what the posts looks like: ', posts.data);
    dispatch(gotPosts(posts.data));
  };
}

function gotPosts(payload) {
  return {
    type: GOT_POSTS,
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
