/** @format */

import { Routes, Route } from "react-router-dom";
import React from "react";
import { Hotels } from "../../pages/Hotels/Hotels";
import { HomePage } from "../../pages/Homepage";
import { SingleHotelPage } from "../../pages/SingleHotelPage";
import { PaymentPage } from "../../pages/PaymentPage";
import { Result } from "../Things_Result/Result";
import FlightResults from "../../pages/Flight/FlightResults";
import Login  from "../../pages/LoginUser";
import { PrivetRoute } from "./PrivetRoute";
import SignupUser from "../../pages/SignupUser";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/paymentPage" element={ <PrivetRoute> <PaymentPage /></PrivetRoute>} />
        <Route path="/hotels/:id" element={<SingleHotelPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/things_to_do" element={<Result />} />
        <Route path="/flights" element={<FlightResults />} />
        <Route path="/signup" element={<SignupUser/>} />
      </Routes>
    </div>
  );
};
