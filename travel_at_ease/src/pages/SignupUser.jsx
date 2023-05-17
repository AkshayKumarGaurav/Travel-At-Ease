/** @format */

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { REGISTER_REQUEST } from "../redux/Authantication/auth.actionType";
import { REGISTER_SUCCESSFUL } from "../redux/Authantication/auth.actionType";
import { REGISTER_ERROR } from "../redux/Authantication/auth.actionType";

const obj = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export default function SignupUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(obj);

  let dispatch = useDispatch();
  let toast=useToast()

  let { isAuth, isError, isLoading, user } = useSelector(
    (store) => store.LoginReducer
  );
  let navigate=useNavigate()
  let location = useLocation();
  console.log(location)

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: REGISTER_REQUEST });
    axios
      .post(`https://doubtful-overcoat-pig.cyclic.app/register/`, formData)
      .then((res) => {
        dispatch({ type: REGISTER_SUCCESSFUL });
        // alert("new user has been created");
        toast({
          title: `${formData?.firstName} your Account has been created`,
          position: 'top',
          description: " Now you can login.",
          status: 'success',
          duration: 2500,
          isClosable: true,
        })
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({ type: REGISTER_ERROR });
        console.log(err);
      });

    console.log(formData);
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
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      // bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Create your free account ✌️
          </Text>
        </Stack>

        <Box
          rounded={"lg"}
          // bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      value={formData.firstName}
                      isRequired
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      value={formData.lastName}
                      isRequired
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  isRequired
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "password" : ""}
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    isRequired
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link to={"/login"} color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
