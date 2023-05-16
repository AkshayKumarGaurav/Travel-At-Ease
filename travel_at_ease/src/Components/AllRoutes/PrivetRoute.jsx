
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

export const PrivetRoute = ({children}) => {


let users=JSON.parse(localStorage.getItem("user"))


    let { isAuth, user } = useSelector (
        (store) => store.LoginReducer
      );
      let location=useLocation();
      // console.log(location)
return users?.token? children : <Navigate to="/login" state={location.pathname} replace/>


}
