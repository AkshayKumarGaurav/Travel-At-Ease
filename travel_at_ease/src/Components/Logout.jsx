import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
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
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
