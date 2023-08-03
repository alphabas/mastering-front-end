import { GETS_POSTS } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GETS_POSTS:
      return action.payload;
    default:
      return state;
  }
}
