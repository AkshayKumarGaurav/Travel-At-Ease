
import "./stay.css";
import { useState } from "react";
import { Flex, Box, Input, Checkbox, Stack, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getHotels } from "../../redux/Hotels/action";
import { TOTAL_DAYS } from "../../redux/Hotels/actionType";

export const Stay = () => {
  let [place, setPlace] = useState("");
  let [day1,setDay1]=useState(0);
  let [day2,setDay2]=useState(0);

  let handleChange = (e) => {
    setPlace(e.target.value);
  };
  let dispatch=useDispatch();
   let navigate=useNavigate()

  let handleSearch = () => {
    let obj = {
      params: {
        q: place,
      },
    };
dispatch(getHotels(obj))
    navigate('/hotels')
    
    let d1=new Date(day1)
    let d2=new Date(day2);
    let time=Math.abs(d2-d1);
    let days=Math.ceil(time / (1000*60*60*24))
    dispatch({type:TOTAL_DAYS,payload:days})
    console.log(days)
  };

  return (
    <>
      <br />
      <div>
        <label style={{ display: "flex", gap: "20px" }}>
          <Input
            onChange={handleChange}
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            placeholder="Going to"
            size="lg"
            width="500px"
          />

          <Input
          onChange={(e)=>setDay1(e.target.value)}
            className="checkin"
            type="date"
            placeholder="Check in"
            size="lg"
            width="200px"
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            padding="4px"
          />
          <Input
          onChange={(e)=>setDay2(e.target.value)}
            borderRadius="2px"
            outline="1px solid rgb(82, 81, 81)"
            type="date"
            placeholder="Check out"
            size="lg"
            width="200px"
            padding="4px"
          />
          <Flex
            alignItems="center"
            h="12"
            paddingLeft="16px"
            width="350px"
            border="1px solid #6b646b"
            borderRadius="4px"
          >
            <span style={{ fontSize: "22px" }} className="material-icons">
              group
            </span>
            <Box paddingLeft="10px">
              <p style={{ fontSize: "12px" }}>Travelers</p>
              <select name="Travelers" id="travelers">
                <option>Adults</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <select name="Travelers" id="travelers">
                <option>Rooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
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
          {/* <Button onClick={handleSearch} colorScheme="red" variant="solid" /> */}
          <Button onClick={handleSearch} colorScheme="red" variant="solid">
            Search
          </Button>
        </div>
      </div>
    </>
  );
};
