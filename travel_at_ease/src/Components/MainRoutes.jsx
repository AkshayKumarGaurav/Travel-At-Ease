/** @format */

import { Routes, Route } from "react-router-dom";
import React from "react";
import { Hotels } from "../pages/Hotels/Hotels";
import { HomePage } from "../pages/Homepage";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/hotels" element={<Hotels/>}/>
       
      </Routes>
      
    </div>
  );
};
