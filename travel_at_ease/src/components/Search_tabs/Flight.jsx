import React from "react";
import { Button, Checkbox, flexbox, Input, Stack } from "@chakra-ui/react";
import "./stay.css";
import { Flex, Box } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FlightResults from "../../pages/Flight/FlightResults";
import { useDispatch } from "react-redux";
import { getFlights } from "../../redux/flightReducer/action";
import { useSelector } from "react-redux";

export const Flight = () => {
  // const [data, setData] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSearch = () => {
    // // filter the data based on source and destination
    // let val = flights.filter((el) => {
    //   if (el.source === source && el.destination === destination) {
    //     return el;
    //   }
    // });

    let obj = {
      source,
      destination,
    };

    console.log("OBJ", obj);

    dispatch(getFlights(obj));
    navigate("/flights");
    // console.log("val", val);
  };

  return (
    <>
      <br />
      <div style={{ marginLeft: "30%", alignItems: "center" }}>
        {/* <Form isRequired> */}
        <label style={{ display: "flex", gap: "20px" }}>
          <select
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            placeholder="Leaving from"
            size="lg"
            width="500px"
            onChange={(e) => {
              setSource(e.target.value);
            }}
            isRequired
          >
            <option value="">Source</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Dubai">Dubai</option>
            <option value="Los Angeles">Los Angeles</option>
          </select>

          <select
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            placeholder="Going to"
            size="lg"
            width="500px"
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            isRequired
          >
            <option value="">Destination</option>
            <option value="Pune">Pune</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
          </select>

          <Input
            className="checkin"
            type="date"
            placeholder="Departing"
            size="lg"
            width="250px"
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            padding="4px"
            height={"60px"}
            isRequired
          />
        </label>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: "44%",
          }}
        >
          <Button colorScheme="red" variant="solid" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
    </>
  );
};
