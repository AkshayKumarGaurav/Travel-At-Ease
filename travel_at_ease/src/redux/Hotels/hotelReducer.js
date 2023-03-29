import React from 'react'
import { GETHOTELS_FAILURE, GETHOTELS_REQUEST, GETHOTELS_SUCCESS } from './actionType';

let initialState={
    isLoading:false,
    isError:false,
    hotels:[]
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
       }
   default:{
       return state
   }
    }
   }
   