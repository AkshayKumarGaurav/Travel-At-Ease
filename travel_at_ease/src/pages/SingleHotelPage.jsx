/** @format */

import {
  Box,
  Button,
  Flex,
  Heading,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { TOTALPRICE } from "../redux/Hotels/actionType";
import axios from "axios";

export const SingleHotelPage = () => {
  let [data, setData] = useState();
  let { id } = useParams();
  let proId = +id;
  const { isLoading, isError, hotels } = useSelector(
    (store) => store.hotelsReducer
  );
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    
    axios
      .get(`https://travelatease.onrender.com/hotels/${proId}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, []);

  const HandlePayment = () => {
    dispatch({ type: TOTALPRICE, payload: data?.price });
    navigate("/paymentPage");
  };

  return (
    <Box>
      <Flex>
        <Box margin={"7px"}>
          <img width={"700px"} src={data?.image} />
        </Box>
        <Box>
          <Heading as="h2" size="xl">
            {data?.name}
          </Heading>
          <Text color={"green"}>
            <i className="fa-solid fa-check"></i>
            {"    "}Fully refundable
          </Text>
          <Heading
            as="h2"
            size="md"
          >{`${data?.rating}/10 Exceptional`}</Heading>
          <Text color={"green"}>
            {`See all ${data?.review}`}
            <i className="fa-solid fa-angles-right"></i>
          </Text>
          <br></br>
          <br></br>

          <Heading as="h2" size="md">
            {"Popular amenities"}
          </Heading>
          <Box>
            <Flex>
              <Box marginRight={"100px"}>
                <Text>
                  <i className="fa-thin fa-fish"></i> Pool
                </Text>
                <Text>
                  <i className="fa-solid fa-paw-simple"></i> Pet friendly
                </Text>
                <Text>
                  <i className="fa-solid fa-spa"></i> Spa
                </Text>
                <Text>
                  <i className="fa-solid fa-dumbbell"></i> Gym
                </Text>
                <Text>
                  <i className="fa-solid fa-check"></i> Housekeeping
                </Text>
              </Box>
              <Box>
                <Text>
                  <i className="fa-solid fa-wifi"></i> Free WiFi
                </Text>
                <Text>
                  <i className="fa-duotone fa-fan"></i> Air conditioning
                </Text>
                <Text>
                  <i className="fa-solid fa-mug-hot"></i> Restaurant
                </Text>
                <Text>
                  <i className="fa-solid fa-square-parking"></i> Parking
                  available
                </Text>
                <Text>
                  <i className="fa-sharp fa-solid fa-wine-glass"></i> Bar
                </Text>
              </Box>
            </Flex>
          </Box>
          <br></br>
          <Box>
            <Flex>
              <Box marginRight={"50px"}>
                <Heading>$ {data?.price}</Heading>

                <Text color={"green"}>includes all taxes & fees</Text>
              </Box>
              <Box>
                <br />
                <Button onClick={HandlePayment} bg={"red"} color="white">
                  Reserve
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
