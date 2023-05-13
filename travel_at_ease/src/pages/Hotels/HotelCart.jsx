/** @format */

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const HotelCart = ({
  image,
  id,
  name,
  place,
  price,
  rating,
  refund,
  review,
  service,
  include,
}) => {
  return (
    <Box m="4">
      <Flex>
        <Box mr="3">
          <Link to={`/hotels/${id}`}>
            <img width={"300px"} src={image} />
          </Link>
        </Box>
        {/* <Spacer /> */}
        <Box>
          <Flex>
            <Box mr="4">
              <Heading as="h3" size="md">
                {name}
              </Heading>
              <Text>place: {place}</Text>
              <Text>include: AC,WIFI,{include}</Text>
              <Text color={"green"}>rating: {rating}</Text>
              <Text color={"green"}>service: {service}</Text>
              {/* <Text >id: {id}</Text> */}
            </Box>
            <Box>
              <br />
              <br />
              <Heading as="h3" size="md">
                $ {price}
              </Heading>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
