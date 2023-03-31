import axios from "axios";
import { GET_FLIGHTS__FAILURE, GET_FLIGHTS__REQUEST, GET_FLIGHTS__SUCCESS } from "./actionType";



export const getFlights =(obj) => async (dispatch) => {
   console.log("obj",obj)
    dispatch({ type: GET_FLIGHTS__REQUEST });
     await axios.get(`https://ash-piquant-engine.glitch.me/flights?source=${obj.source}&destination=${obj.destination}`).then((res) => {
      dispatch({ type: GET_FLIGHTS__SUCCESS, payload: res.data });
      // console.log(res.data);
    }).catch((err)=>{
      dispatch({type:GET_FLIGHTS__FAILURE})
    })
  };