/** @format */

import { Heading } from "@chakra-ui/react";
import React from "react";
import { HotelCart } from "./HotelCart";

export const HotelList = ({ hotels }) => {
  return (
    <div>
      {hotels.length>0?hotels.map((ele) => {
        return <HotelCart key={ele.id} {...ele} />;
      }) :<Heading color={'red'}>Sorry No Data found in this city</Heading>}
    </div>
  );
};
