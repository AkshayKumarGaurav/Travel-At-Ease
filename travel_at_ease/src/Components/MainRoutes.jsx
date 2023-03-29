/** @format */

import { Routes, Route } from "react-router-dom";
import React from "react";
import { Hotels } from "../pages/Hotels/Hotels";

export const MainRoutes = () => {
  return (
    <div>
      <Routes><Route path="/" element={<Hotels/>}/></Routes>
    </div>
  );
};
