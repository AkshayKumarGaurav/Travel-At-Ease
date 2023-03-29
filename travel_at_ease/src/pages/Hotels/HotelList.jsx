/** @format */

import React from "react";
import { HotelCart } from "./HotelCart";

export const HotelList = ({ hotels }) => {
  return (
    <div>
      {hotels.map((ele) => {
        return <HotelCart key={ele.id} {...ele} />;
      })}
    </div>
  );
};
