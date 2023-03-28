import React from "react";
import {useSelector, useDispatch} from "react-redux"

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Select,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { addProduct } from "../redux/productReducer/action";

const initialState = {
  image: "",
  title: "",
  price: "",
  brand: "",
  discount: "",
  gender: "",
};

export const AddProduct = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch = useDispatch() 

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setProduct((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product))
    setProduct(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Add Your Product</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <Link color={"blue.400"}>features</Link> ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Product Image</FormLabel>
                  <Input
                    type="text"
                    name="image"
                    value={product.image}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Image"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Product Title</FormLabel>
                  <Input
                    type="text"
                    name="title"
                    value={product.title}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="title"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Product Price</FormLabel>
                  <Input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Price"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Product Brand</FormLabel>
                  <Input
                    type="text"
                    name="brand"
                    value={product.brand}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Brand"
                  />
                </FormControl>
                <Select
                  placeholder="Select gender"
                  name="gender"
                  id=""
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value="male">men</option>
                  <option value="female">female</option>
                  <option value="kids">kids</option>
                </Select>
                <FormControl id="password">
                  <FormLabel>Product Discount</FormLabel>
                  <Input
                    type="text"
                    name="discount"
                    value={product.discount}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Discount"
                  />
                </FormControl>
                <input type="submit" value={"Sumbit"} />
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    </div>
  );
};
