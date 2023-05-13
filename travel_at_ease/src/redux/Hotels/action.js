import axios from "axios";

import { GETHOTELS_FAILURE, GETHOTELS_REQUEST, GETHOTELS_SUCCESS } from "./actionType";

export const getHotels =(obj)=> (dispatch) => {
    dispatch({ type: GETHOTELS_REQUEST });
    axios.get(`https://travelatease.onrender.com/hotels`,obj).then((res) => {
      dispatch({ type: GETHOTELS_SUCCESS, payload: res.data });
      // console.log(res);
    }).catch((err)=>{
      dispatch({type:GETHOTELS_FAILURE})
    })
  };