/** @format */

import { Box, Button, Flex, FormControl, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const PaymentPage = () => {
  const { isLoading, isError, hotels, price, days } = useSelector(
    (store) => store.hotelsReducer
  );
  let texes = Math.floor((price * days * 18) / 100);
  let resortFee = days * 199;
  let totalFee = price * days + texes + resortFee;

  //form data//
  let handleSubmit=()=>{
   
console.log('Payment SuccessFull')
  }

  return (
    <Box marginLeft={"80px"}>
      <Flex>
        <Box marginRight={"50px"}>
          <Heading as={"h2"} size="xl">
            Secure booking — only takes 2 minutes!
          </Heading>
          <Box marginTop={"40px"}>
            <Heading as="h4" size="sm">
              <i class="fa-sharp fa-solid fa-circle-check"></i> Fully refundable
              before 10:00am (property local time)
            </Heading>
            <Text>
              {" "}
              You can change or cancel this stay for a full refund if plans
              change. Because flexibility matters.
            </Text>
          </Box>
          <br />
          <Box>
            <Heading color={"#42A5F5"} as="h4" size="md">
              <i class="fa-solid fa-lock"></i> Sign in to earn $2.91 in Orbucks
            </Heading>
          </Box>
          <br />

          <Box>
            <Heading size={"md"}>Payment method</Heading>
            <Text color={"green"}>
              UPI | PayPal | Monthly Payment | Click-to-Pay
            </Text>
            <br />
            <Box>
               {/******* *payment form start******* */}
              <Box >
                <label>
                  Name on Card*{" "}
                  <Input type={"text"} border={"1px solid black"}></Input>
                </label>
                <label>
                  Debit/Credit card number*{" "}
                  <Input type={"number"} border={"1px solid black"}></Input>
                </label>
                <Flex>
                  <Box>
                    <Text>Expiration date*</Text>
                    <Input
                      marginRight="70px"
                      width={"100px"}
                      type={"month"}
                      border={"1px solid black"}
                    ></Input>
                    <Text>Security code*</Text>

                    <Input
                      marginRight="70px"
                      width={"100px"}
                      type={"number"}
                      border={"1px solid black"}
                    ></Input>
                  </Box>
                  <Box>
                    <Text>Email Id*</Text>
                    <Input
                      marginRight="70px"
                      width={"300px"}
                      type={"email"}
                      border={"1px solid black"}
                    ></Input>
                    <Text>Mobile no*</Text>
                    <Input
                      marginRight="70px"
                      width={"300px"}
                      type={"number"}
                      border={"1px solid black"}
                    ></Input>
                  </Box>
                </Flex>
                <Button
                  margin={"20px"}
                  width={"300px"}
                  bg={"green"}
                  color="white"
                  onClick={handleSubmit}
                >submit</Button>
              </Box>
              {/******* *payment form end******* */}
            </Box>
          </Box>
        </Box>
        <Box height={"600px"} bg="#221286" margin={"20px"}>
          <img
            width={"500px"}
            src={
              "https://www.searchenginejournal.com/wp-content/uploads/2020/03/the-top-10-most-popular-online-payment-solutions-5e9978d564973-1520x800.webp"
            }
          />
          <Heading textAlign={"center"} color={"white"} as="h2" size={"lg"}>
            {" "}
            Price details{" "}
          </Heading>
          <br />
          <Box>
            <Flex>
              <Box marginLeft={"20px"} marginRight={"40px"}>
                <Text color={"white"}>{`1 room * ${days} nights`}</Text>
                <Text color={"white"}>{`₹ ${price}.00 average per night`}</Text>
              </Box>
              <Box>
                <Heading size={"lg"} color={"white"}>{`₹ ${
                  price * days
                }.00`}</Heading>
              </Box>
            </Flex>
          </Box>
          <br />
          <Box>
            <Box marginLeft={"20px"}>
              <Flex>
                <Text marginRight={"120px"} color={"white"}>
                  Taxes and fees @18%{" "}
                </Text>
                <Text color="white">{`₹ ${texes}.00`}</Text>
              </Flex>
            </Box>

            <Box marginLeft={"20px"}>
              <Flex>
                <Text marginRight={"100px"} color={"white"}>
                  Resort fee ₹199 per night{" "}
                </Text>
                <Text color="white">{`₹ ${resortFee}.00`}</Text>
              </Flex>
            </Box>
            <br />
            <hr></hr>
            <Box marginLeft={"20px"}>
              <Flex>
                <Heading marginRight={"100px"} color={"white"}>
                  Total
                </Heading>
                <Heading color={"white"}>{`₹ ${totalFee}.00`}</Heading>
              </Flex>
            </Box>
            <Box marginLeft={"20px"}>
              <Flex>
                <Heading
                  as="h4"
                  size="sm"
                  marginRight={"150px"}
                  color={"white"}
                >
                  Pay Now @80%
                </Heading>
                <Heading as="h4" size="sm" color={"white"}>{`₹ ${Math.floor(
                  (totalFee * 80) / 100
                )}.00`}</Heading>
              </Flex>
            </Box>
            <Box marginLeft={"20px"}>
              <Flex>
                <Heading
                  as="h4"
                  size="sm"
                  marginRight={"100px"}
                  color={"white"}
                >
                  Pay at property @20%
                </Heading>
                <Heading as="h4" size="sm" color={"white"}>{`₹ ${Math.floor(
                  (totalFee * 20) / 100
                )}.00`}</Heading>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
