import axios from "axios";

export const GETS_POSTS = "GET_POSTS";

export const getPosts = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3005/posts").then((res) => {
      console.log("===<>", res.data);
      dispatch({ type: GETS_POSTS, payload: res.data });
    });
  };
};
