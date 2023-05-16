/** @format */

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

const initialState = {
  isAuth: false,
  isError: false,
  isLoading: false,
  user: "",
};

export const LoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESSFUL:
      return { ...state, isLoading: false, isAuth: true, user: payload };
    case LOGIN_ERROR:
      return { ...state, isLoading: false, isError: true };
    case LOGOUT_USER:
      return { ...state, isAuth: false, user: "" };
    case REGISTER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case REGISTER_SUCCESSFUL: {
      return { ...state, isLoading: false };
    }
    case REGISTER_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
