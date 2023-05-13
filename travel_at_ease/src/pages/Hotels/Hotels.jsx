/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../redux/Hotels/action";
import { useEffect } from "react";
import { HotelList } from "./HotelList";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { SideBar } from "../../Components/SideBar";
import { useLocation, useSearchParams } from "react-router-dom";

export const Hotels = () => {
  let [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  const { isLoading, isError, hotels, searchPlace } = useSelector(
    (store) => store.hotelsReducer
  );

  // const store = useSelector((store) => store.hotelsReducer);
  // console.log(store);

  let service = searchParam.getAll("service");
  let order=searchParam.get("order")
// console.log(order)
  let location = useLocation();
  // console.log(location);

  let obj = {
    params: {
      q: searchPlace,
      service,
      _sort: order && "price",
      _order:order
      
    },
  };
  useEffect(() => {
    dispatch(getHotels(obj));
  }, [location.search]);

  return isLoading ? (
    <div style={{ margin: "20%" }}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        // transform=" translate(-50%, -50%)"
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
      <Box>
        <Flex>
          <Box
            style={{
              padding: "2%",
              position: "fixed",
              overflow: "hidden",
              backgroundColor: "white",
              // top: "0%",
              height: "100%",
            }}
          >
            <SideBar />
          </Box>
          <Box style={{ marginLeft: "15%" }}>
            <HotelList hotels={hotels} />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};
