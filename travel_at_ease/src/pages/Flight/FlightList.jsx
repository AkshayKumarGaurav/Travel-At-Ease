import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";

const FlightList = ({
  arline_logo,
  source,
  destination,
  travel_time,
  departure_time,
  airlines,
  price,
}) => {
  return (
    <div style={{ body: "#f5f5f5", marginLeft: "20%" }}>
      <Stack p="4" boxShadow="lg" m="4" borderRadius="sm" width={"70%"}>
        <Stack direction="row" alignItems="center">
          <Text fontWeight="semibold">{departure_time}</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          // width={"40%"}
        >
          <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
            {source} - {destination}
            <br />
            {travel_time}
            <br />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {airlines} <img src={arline_logo} style={{ width: "20px" }} />
            </div>
          </Text>
          <Stack direction={{ base: "column", md: "row" }}>
            <p variant="outline" colorScheme="black">
              <i class="fa fa-inr" aria-hidden="true"></i>
              <b>{price}</b>
            </p>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default FlightList;
