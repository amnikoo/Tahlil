import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { ADD_THREAD, GET_THREADS, DELETE_THREAD } from "./types";
import { tokenConfig } from "./auth";

// GET THREADS
export const getThreads = () => (dispatch, getState) => {
  axios
    .get("/api/threads/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_THREADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE THREAD
export const deleteThread = id => (dispatch, getState) => {
  axios
    .delete(`/api/threads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteThread: "Thread Deleted" }));
      dispatch({
        type: DELETE_THREAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD THREAD
export const addThread = thread => (dispatch, getState) => {
  axios
    .post("/api/threads/", thread, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addThread: "Thread Added" }));
      dispatch({
        type: ADD_THREAD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
