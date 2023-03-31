    import React from 'react'
    import { GET_FLIGHTS__FAILURE, GET_FLIGHTS__REQUEST, GET_FLIGHTS__SUCCESS } from './actionType'


    let initialState={
        isLoading:false,
        isError:false,
        flights:[],
    }

    export const reducer = (state=initialState,{type,payload}) => {
        switch (type){
        case GET_FLIGHTS__REQUEST:
            {
            return {...state,isLoading:true}
        };
        case GET_FLIGHTS__SUCCESS:
            {
            return{...state,isLoading:false,flights:[...payload]}
        };
        case GET_FLIGHTS__FAILURE:
            {
            return{...state,isLoading:false,isError:true}
        };
        default:
            {
            return state
        }
        }
    }
    