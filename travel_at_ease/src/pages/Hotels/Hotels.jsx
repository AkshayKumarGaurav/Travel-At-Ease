/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../redux/Hotels/action";
import { useEffect } from "react";
import { HotelList } from "./HotelList";
import { Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

export const Hotels = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, hotels } = useSelector(
    (store) => store.hotelsReducer
  );
  // console.log(hotels)

  useEffect(() => {
    dispatch(getHotels);
  }, []);

  return isLoading ? (
    <div style={{ margin: "20%" }}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        transform=" translate(-50%, -50%)"
        position="fixed"
        z-index=" 1000"
        left="50%"
        right="70%"
        top="20%"
        bottom="30%"
      />
    </div>
  ) : (
    <div>
      <Heading>Stays</Heading>
      <HotelList hotels={hotels} />
    </div>
  );
};
