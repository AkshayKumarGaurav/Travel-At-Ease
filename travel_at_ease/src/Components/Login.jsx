import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <b>
      <Button
        w="194px"
        color={"white"}
        background={"#00253c"}
        _hover={{
          background: "#00253c",
        }}
        textAlign={"center"}
        justifyContent="flex-start"
        fontWeight="semibold"
        fontSize="sm"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    </b>
  );
};

export default LoginButton;
