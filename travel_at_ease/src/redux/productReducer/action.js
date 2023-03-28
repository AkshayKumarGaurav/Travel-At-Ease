// import axios from "axios";
// import {
//   ADD_PRODUCT_SUCCESS,
//   GET_PRODUCT_SUCCESS,
//   PATCH_PRODUCT_SUCCESS,
//   PRODUCT_FAILURE,
//   PRODUCT_REQUEST,
// } from "./actionTypes";
import axios from "axios"

import { ADD_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";




export const addProduct = (data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .post("http://localhost:8080/hotels", data)
    .then((res) => {
      dispatch({ type: ADD_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};