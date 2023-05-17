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

export let login = (userData,toast) => (dispatch) => {
  
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post(`https://doubtful-overcoat-pig.cyclic.app/login/`, userData)
    .then((res) => {
      localStorage.setItem("user",JSON.stringify(res.data))
      console.log(res.data)
      // alert(`Walcome Back ${res.data.firstName}` )
      toast({
        title: `Walcome Back ${res.data.firstName}`,
        position: 'top',
        description: "You have logged in successfully.",
        status: 'success',
        duration: 2500,
        isClosable: true,
      })
      dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data.firstName });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_ERROR });
      // alert("wrong Credeantials")
      toast({
        title: "wrong Credeantials",
        position: 'top',
        description: "Check your email and password",
        status: 'error',
        duration: 2500,
        isClosable: true,
      })
      console.log(err);
    });
};
