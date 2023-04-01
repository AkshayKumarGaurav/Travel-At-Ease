import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import logo from "../Images/logo2.png";
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
} from "@chakra-ui/react";

import { BsThreeDotsVertical, BsChatSquareQuote } from "react-icons/bs";
import { RiShutDownLine, RiRestartLine, RiFileShredLine } from "react-icons/ri";

export const Navbar = () => {
  const toast = useToast();
  return (
    <div className="Navbar">
      <div>
        <Link to="/">
          <div className="SiteLogo" >
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
                  style={{ color: "white", marginLeft: "10px" }}
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
                   <Link to='/hotels'>
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
      <div>
        <div>
          <h4>English</h4>
        </div>
        <div>
          <h4>List your property</h4>
        </div>
        <div>
          <h4>Support</h4>
        </div>
        <div>
          <h4>Trips</h4>
        </div>
        <div>
          <h4>Sign In</h4>
        </div>
      </div>
    </div>
  );
};
