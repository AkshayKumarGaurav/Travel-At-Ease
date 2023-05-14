/** @format */

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Authantication/auth.action";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const obj = {
  email: "",
  password: "",
};

export default function Login() {
  const [formData, setFormData] = useState(obj);

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location);

  let { isAuth, isError, isLoading, user } = useSelector(
    (store) => store.LoginReducer
  );
  console.log(isAuth, user);
  if (isAuth) {
    navigate(location.state, { replace: true });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(formData));

    setFormData(obj);
  };
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
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                required
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                required
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Link to="/signup" color={"teal"}>Create a free account?  </Link>
              <Button colorScheme={"blue"} variant={"solid"} type="submit">
                Sign in
              </Button>
            </Stack>
          </Stack>
        </form>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
