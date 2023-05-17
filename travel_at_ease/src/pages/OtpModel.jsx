/** @format */

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export function OtpModel() {
  let [input, setInput] = useState("");

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  let handleOtp = () => {
    onClose();
  };

  return (
    <>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        OnClick
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Enter OTP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color={"red"}>Don't share otp with any one</Text>
            <Input
              onChange={(e) => setInput(e.target.value)}
              type="number"
              isRequired
              placeholder="enter otp"
            ></Input>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleOtp}>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
