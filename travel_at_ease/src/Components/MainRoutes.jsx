/** @format */

import { Routes, Route } from "react-router-dom";
import React from "react";
import { Hotels } from "../pages/Hotels/Hotels";
import { HomePage } from "../pages/Homepage";
import { SingleHotelPage } from "../pages/SingleHotelPage";
import { PaymentPage } from "../pages/PaymentPage";
import { Result } from "./Things_Result/Result";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
        <Route path="/paymentPage" element={<PaymentPage/>}/>
        <Route path="/hotels/:id" element={<SingleHotelPage/>}/>
        <Route path="/things_to_do" element={<Result/>}/>
       
      </Routes>
      
    </div>
  );
};
