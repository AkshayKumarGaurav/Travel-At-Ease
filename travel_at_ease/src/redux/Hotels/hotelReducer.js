import React from 'react'
import { GETHOTELS_FAILURE, GETHOTELS_REQUEST, GETHOTELS_SUCCESS, TOTALPRICE, TOTAL_DAYS } from './actionType';

let initialState={
    isLoading:false,
    isError:false,
    hotels:[],
    price:0,
    days:0
}

export const hotelsReducer = (state=initialState,{type,payload}) => {
    switch (type){
       case GETHOTELS_REQUEST:{
           return {...state,isLoading:true}
       };
       case GETHOTELS_SUCCESS:{
           return{...state,isLoading:false,hotels:payload}
       };
       case GETHOTELS_FAILURE:{
           return{...state,isLoading:false,isError:true}
       };
       case TOTALPRICE:{
        return {...state,price:payload}
       };
       case TOTAL_DAYS:{
        return {...state,days:payload}
       }
   default:{
       return state
   }
    }
   }
   