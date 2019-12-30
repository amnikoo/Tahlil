import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_USERS, DELETE_USER, ADD_USER } from "./types";

// GET USERS
export const getUsers = () => (dispatch, getState) => {
  axios
    .get("/api/users/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE USER
export const deleteUser = id => (dispatch, getState) => {
  axios
    .delete(`/api/users/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteUser: "User Deleted" }));
      dispatch({
        type: DELETE_USER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD USER
export const addUser = user => (dispatch, getState) => {
  axios
    .post("/api/users/", user, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addUser: "User Added" }));
      dispatch({
        type: ADD_USER,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
