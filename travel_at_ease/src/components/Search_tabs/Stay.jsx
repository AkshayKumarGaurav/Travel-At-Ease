/** @format */

import "./stay.css";
import { useState } from "react";
import {
  Flex,
  Box,
  Input,
  Checkbox,
  Stack,
  Button,
  Select,
  FormControl,
  Text,
} from "@chakra-ui/react";
import { Form, Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../redux/Hotels/action";
import { SEARCH_PLACE, TOTAL_ADULTS, TOTAL_DAYS, TOTAL_ROOMS } from "../../redux/Hotels/actionType";

export const Stay = () => {
  let [place, setPlace] = useState("");
  let [day1, setDay1] = useState(0);
  let [day2, setDay2] = useState(0);
  let [adult, setAdult] = useState(1);
  let [rooms, setRooms] = useState(1);

  const {filterByService} = useSelector(
    (store) => store.hotelsReducer
  )
  console.log(filterByService)

  let handleChange = (e) => {
    let val = e.target.value;
    setPlace(val);
    console.log(val);
  };
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleSearch = (e) => {
    e.preventDefault();
dispatch({type:SEARCH_PLACE,payload:place})

    let d1 = new Date(day1);
    let d2 = new Date(day2);
    let time = Math.abs(d2 - d1);
    let days = Math.ceil(time / (1000 * 60 * 60 * 24));
    dispatch({ type: TOTAL_DAYS, payload: days });
    console.log(days);

    dispatch({type:TOTAL_ADULTS,payload:adult});
    dispatch({type:TOTAL_ROOMS,payload:rooms});

    navigate("/hotels");
  };

  return (
    <>
      <br />
      <form onSubmit={handleSearch}>
        <label style={{ display: "flex", gap: "20px" }}>
          <Select placeholder="Going to" onChange={handleChange} isRequired>
            <option value="delhi">delhi</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
          </Select>
          <Input
            onChange={(e) => setDay1(e.target.value)}
            className="checkin"
            type="date"
            placeholder="Check in"
            size="lg"
            width="200px"
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            padding="4px"
            isRequired
          />
          <Input
            onChange={(e) => setDay2(e.target.value)}
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            type="date"
            placeholder="Check out"
            size="lg"
            width="200px"
            padding="4px"
            isRequired
          />
          <Flex
            alignItems="center"
            h="12"
            paddingLeft="16px"
            width="60%"
            border="1px solid #6b646b"
            borderRadius="4px"
          >
            <span style={{ fontSize: "22px" }} className="material-icons">
              group
            </span>
            <Box paddingLeft="10px">
              {/* <Text style={{ fontSize: "12px" }}>Travelers</Text> */}
              <Flex>
                <Select
                  placeholder="Adults"
                  id="travelers"
                  isRequired
                  onChange={(e) => setAdult(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
                <Select
                  onChange={(e) => setRooms(e.target.value)}
                  placeholder="Rooms"
                  name="Travelers"
                  id="travelers"
                  isRequired
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </Flex>
            </Box>
          </Flex>
        </label>
        <br />
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          <Checkbox size="lg" colorScheme="teal">
            Add a flight
          </Checkbox>
          <Checkbox size="lg" colorScheme="teal">
            Add a car
          </Checkbox>
        </Stack>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" colorScheme="red" variant="solid">
            Search
          </Button>
        </div>
      </form>
    </>
  );
};
