/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../redux/Hotels/action";
import { useEffect } from "react";
import { HotelList } from "./HotelList";
import { Heading } from "@chakra-ui/react";

export const Hotels = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, hotels } = useSelector(
    (store) => store.hotelsReducer
  );
  // console.log(hotels)

  useEffect(() => {
    dispatch(getHotels);
  }, []);

  return (
    <div>
        <Heading>Stays</Heading>
      <HotelList hotels={hotels} />
    </div>
  );
};
