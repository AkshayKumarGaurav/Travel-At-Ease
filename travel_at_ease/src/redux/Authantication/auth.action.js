/** @format */

import axios from "axios";
import {
  GET_USERS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESSFUL,
  LOGOUT_USER,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESSFUL,
} from "./auth.actionType";

export let login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post(`https://doubtful-overcoat-pig.cyclic.app/login`, userData)
    .then((res) => {
      // localStorage.setItem("token",res.data.token)
      console.log(res.data)
      alert(`Walcome Back ${res.data.firstName}` )
      dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data.firstName });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_ERROR });
      alert("wrong Credeantials")
      console.log(err);
    });
};
