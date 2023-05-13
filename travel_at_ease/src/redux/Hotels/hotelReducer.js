/** @format */

import React from "react";
import {
  GETHOTELS_FAILURE,
  GETHOTELS_REQUEST,
  GETHOTELS_SUCCESS,
  SEARCH_PLACE,
  TOTALPRICE,
  TOTAL_ADULTS,
  TOTAL_DAYS,
  TOTAL_ROOMS,
} from "./actionType";

let initialState = {
  isLoading: false,
  isError: false,
  hotels: [],
  price: 0,
  days: 0,
  adults: 0,
  rooms: 0,
  searchPlace:'',
};

export const hotelsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETHOTELS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GETHOTELS_SUCCESS: {
      return { ...state, isLoading: false, hotels: payload };
    };
    case SEARCH_PLACE:{
        return{...state,searchPlace:payload}
    }
    case GETHOTELS_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case TOTALPRICE: {
      return { ...state, price: payload };
    }
    case TOTAL_DAYS: {
      return { ...state, days: payload };
    }
    case TOTAL_ADULTS: {
      return { ...state, adults: payload };
    }
    case TOTAL_ROOMS: {
      return { ...state, rooms: payload };
    }
    default: {
      return state;
    }
  }
};
