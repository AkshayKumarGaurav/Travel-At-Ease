/** @format */

import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from "@chakra-ui/react";
  
  import React, { useState } from "react";
  
  const obj = {
    email: "",
    password: "",
  };
  
  export default function Login() {
    const [formData, setFormData] = useState(obj);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      // console.log(name,value)
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      /* Connecting to Frontend to backend **********************/
  
      // axios
      //   .post(`https://electro-emporium.cyclic.app/user/auth/login`, formData)
      //   .then((res) => {
      //     localStorage.setItem("token",res.data.token)
      //     console.log(res.data)
      //   })
      //   .catch((err)=>console.log(err))
  
      console.log(formData);
      setFormData(obj);
    };
    return (
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4} w={"full"} maxW={"md"}>
              <Heading fontSize={"2xl"}>Sign in to your account</Heading>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" 
                required
                name="email"
                onChange={handleChange}
                value={formData.email}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" 
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