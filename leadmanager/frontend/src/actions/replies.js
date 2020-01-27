import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { ADD_REPLY, GET_REPLIES, DELETE_REPLY } from "./types";
import { tokenConfig } from "./auth";

// GET REPLIES
export const getReplies = () => (dispatch, getState) => {
  axios
    .get("/api/replies/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_REPLIES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE REPLY
export const deleteReply = id => (dispatch, getState) => {
  axios
    .delete(`/api/replies/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteReply: "Reply Deleted" }));
      dispatch({
        type: DELETE_REPLY,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD REPLY
export const addReply = reply => (dispatch, getState) => {
  axios
    .post("/api/replies/", reply, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addReply: "Reply Added" }));
      dispatch({
        type: ADD_REPLY,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
