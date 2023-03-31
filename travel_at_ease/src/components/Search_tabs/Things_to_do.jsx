import React, { useState } from "react";
import { Button, Checkbox, flexbox, Input, Stack } from "@chakra-ui/react";
import "./stay.css";
import { Flex, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export const Things_to_do = () => {
  const [city,setCity]= useState("")

  return (
    <>
      <br />
      <div>
        <label style={{ display: "flex", gap: "20px" }}>
          <Input
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            placeholder="Things to do in"
            size="lg"
            width="600px"
            onChange={(e)=>setCity(e.target.value)}
          />

          <Input
            // className="checkin"
            type="date"
            placeholder="From"
            size="lg"
            width="200px"
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            padding="5px"
          />
          <Input
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            type="date"
            placeholder="To"
            size="lg"
            width="200px"
            padding="5px"
            paddingLeft="29px"
          />
        </label>
        <br />

        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
         
            <Button colorScheme="red" variant="solid" >
            <Link to={{ pathname: '/things_to_do', search: `?city=${city}`}}> Search</Link>
             
            </Button>
          
        </div>
      </div>
    </>
  );
};
