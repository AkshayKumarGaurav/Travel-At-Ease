import { Heading } from "@chakra-ui/react";
import { useSelect } from "@mui/base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../../redux/flightReducer/action";
import FlightList from "./FlightList";
import { Box, Flex, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Spinner } from "@chakra-ui/react";

const FlightResults = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, flights } = useSelector(
    (store) => store.flightReducer
  );

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return isLoading ? (
    // <Heading>Loading...</Heading>
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
      <Heading>Flights</Heading>
      {flights.length == 0 ? (
        <Box textAlign="center" py={10} px={6}>
          <Box display="inline-block">
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg={"red.500"}
              rounded={"50px"}
              w={"55px"}
              h={"55px"}
              textAlign="center"
            >
              <CloseIcon boxSize={"20px"} color={"white"} />
            </Flex>
          </Box>
          <Heading as="h2" size="xl" mt={6} mb={2}>
            No Flights Found
          </Heading>
        </Box>
      ) : (
        flights?.map((el) => <FlightList key={el.id} {...el} />)
      )}
    </div>
  );
};

export default FlightResults;
