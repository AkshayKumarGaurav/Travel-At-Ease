/** @format */

import React from "react";
import "./Navbar.css";
import { Box } from "@chakra-ui/react";
import logo from "../Images/logo2.png";
// import LoginButton from "./LoginButton";
// import LogoutButton from "./LogoutButton";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Login from "../pages/LoginUser";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_USER } from "../redux/Authantication/auth.actionType";

export const Navbar = () => {
  let { isAuth, isError, isLoading, user } = useSelector(
    (store) => store.LoginReducer
  );

  let dispatch=useDispatch();


  let obj={
    firstName:'',
    msg:'',
    token:''
  }
  
  let {firstName,msg,token}=JSON.parse(localStorage.getItem("user"))|| obj


  let handleLogout=()=>{
  localStorage.removeItem("user")
    dispatch({type:LOGOUT_USER})
  }

  return (
    <div className="Navbar">
      <div style={{ marginTop: "1%" }}>
        <Link to="/">
          <div className="SiteLogo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "14px",
            marginLeft: "-58px",
            background: "#00253c",
            color: "#00253c",
          }}
        >
          <Flex /*justifyContent="center"*/ mt={4}>
            <Popover placement="bottom" isLazy>
              <PopoverTrigger>
                <p
                  aria-label="More travel"
                  // icon={<BsThreeDotsVertical />}
                  variant="solid"
                  w="fit-content"
                  style={{
                    color: "white",
                    marginLeft: "10px",
                    fontSize: "17px",
                  }}
                  // className="material-icons"
                >
                  More Travel
                </p>
              </PopoverTrigger>
              <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
                <PopoverArrow />
                <PopoverBody>
                  <Stack>
                    <Button
                      w="194px"
                      variant="ghost"
                      // leftIcon={<BsChatSquareQuote />}
                      justifyContent="flex-start"
                      fontWeight="normal"
                      fontSize="sm"
                    >
                      Stays
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      // leftIcon={<BsChatSquareQuote />}
                      justifyContent="flex-start"
                      fontWeight="normal"
                      fontSize="sm"
                    >
                      Flights
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      // leftIcon={<BsChatSquareQuote />}
                      justifyContent="flex-start"
                      fontWeight="normal"
                      fontSize="sm"
                    >
                      Packages
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      // leftIcon={<BsChatSquareQuote />}
                      justifyContent="flex-start"
                      fontWeight="normal"
                      fontSize="sm"
                    >
                      Cars
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      // leftIcon={<BsChatSquareQuote />}
                      justifyContent="flex-start"
                      fontWeight="normal"
                      fontSize="sm"
                    >
                      Cruises
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      // leftIcon={<BsChatSquareQuote />}
                      justifyContent="flex-start"
                      fontWeight="normal"
                      fontSize="sm"
                    >
                      Things to do
                    </Button>
                    <Link to="/hotels">
                      <Button
                        w="194px"
                        variant="ghost"
                        // leftIcon={<BsChatSquareQuote />}
                        justifyContent="flex-start"
                        fontWeight="normal"
                        fontSize="sm"
                      >
                        Deals
                      </Button>
                    </Link>
                    <Button
                      w="194px"
                      variant="ghost"
                      // leftIcon={<BsChatSquareQuote />}
                      justifyContent="flex-start"
                      fontWeight="normal"
                      fontSize="sm"
                    >
                      Groups & meetings
                    </Button>
                    <Button
                      w="194px"
                      variant="ghost"
                      // leftIcon={<BsChatSquareQuote />}
                      justifyContent="flex-start"
                      fontWeight="normal"
                      fontSize="sm"
                    >
                      Travel Blog
                    </Button>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          );
        </div>
      </div>
      <div style={{ marginTop: "1%", marginLeft: "-1%" }}>
        <div>
          <h4>List your property</h4>
        </div>
        <div>
          <h4>Support</h4>
        </div>
        <div>
          <h4>Trips</h4>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <Box>
         <Flex>
         <Box>
              {token ? (
                <Box color={"white"} padding={" 0px 13px"} fontWeight={"600"}>
                  {firstName}
                </Box>
              ) : (
                <Box color={"white"} padding={" 0px 13px"} fontWeight={"600"}>
                  <Link to={"/login"}>Login/signup</Link>
                </Box>
              )}
            </Box>
            <Box>{token && <Button onClick={handleLogout} colorScheme="red">Logout</Button>}</Box>
         </Flex>
          </Box>
        </div>
      </div>
    </div>
  );
};
