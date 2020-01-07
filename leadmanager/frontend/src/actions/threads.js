import axios from "axios";

import { ADD_THREAD } from "./types";

// GET USERS

// ADD USER
export const addThread = thread => (dispatch, getState) => {
  axios
    .post("/api/threads/", thread)
    .then(res => {
      dispatch({
        type: ADD_THREAD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
