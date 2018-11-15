import { ADD_POST, UPDATE_POST, DELETE_POST } from './actionTypes.js';

const INITIAL_STATE = { posts: {} };

function rootReducer(state = INITIAL_STATE, action) {
  let newPosts;
  switch (action.type) {
    case ADD_POST:
      return {
        posts: { ...state.posts, [action.payload.id]: action.payload }
      };

    case UPDATE_POST:
      newPosts = { ...state.posts };
      newPosts[action.payload.id] = action.payload;
      return { posts: newPosts };

    case DELETE_POST:
      newPosts = { ...state.posts };
      delete newPosts[action.id];
      return { posts: newPosts };

    default:
      return state;
  }
}

export default rootReducer;
