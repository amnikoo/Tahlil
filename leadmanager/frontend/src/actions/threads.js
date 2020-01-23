import axios from "axios";

import { ADD_THREAD } from "./types";
import { tokenConfig } from "./auth";

// ADD THREAD
export const addThread = thread => (dispatch, getState) => {
  axios
    .post("/api/threads/", thread, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ADD_THREAD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
