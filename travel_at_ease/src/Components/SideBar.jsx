/** @format */

import { StarIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SideBar = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  let initialData = searchParams.getAll("service");
  let initialPrice = searchParams.get("price");
  let initialStar = searchParams.getAll("star");

  const [service, setService] = useState(initialData || []);
  let [price, setPrice] = useState(+initialPrice || 0);
  let [star, setStar] = useState(initialStar || []);
  let [order, setOrder] = useState( searchParams.get("order")||"");

  let handleChange = (e) => {
    let val = e.target.value;
    let newData = [...service];
    if (newData.includes(val)) {
      newData = newData.filter((item) => item !== val);
    } else {
      newData.push(val);
    }
    setService(newData);
  };
  let handlePrice = (e) => {
    let val = e.target.value;
    setPrice(+val);
  };

  // let HandleStar = (e) => {
  //   let val = e.target.value;
  //   let newStar = [...star];
  //   if (newStar.includes(val)) {
  //     newStar = newStar.filter((ele) => ele != val);
  //   } else {
  //     newStar.push(val);
  //   }
  //   setStar(newStar);
  // };

  useEffect(() => {
    let params = { service, star };
    price && (params.price=price)
    order && (params.order=order)
    setSearchParams(params);

  }, [service, price, star, order]);

  return (
    <Box>
      <Heading as="h4" size="md">
        Sort by Price
      </Heading>
      <Box>
        <RadioGroup>
          <Stack>
            <Radio onChange={() => setOrder("asc")} defaultChecked={order=="asc"}>
              Low to High
            </Radio>
            <Radio onChange={() => setOrder("desc")} defaultChecked={order=="desc"}>
              High to Low
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <br />
      <Heading as="h4" size="md">
        Filter by
      </Heading>
      <br />
      {/* filter by Guest rating */}
      <Box>
        <b>Guest rating</b>
        <br />
        <Checkbox
          value={"Wonderful"}
          onChange={handleChange}
          isChecked={service.includes("Wonderful")}
        >
          Wonderful 4.5+
        </Checkbox>
        <br />
        <Checkbox
          value={"Very_Good"}
          onChange={handleChange}
          isChecked={service.includes("Very_Good")}
        >
          Very good 4+
        </Checkbox>
        <br />
        <Checkbox
          value={"Good"}
          onChange={handleChange}
          isChecked={service.includes("Good")}
        >
          Good 3.5+
        </Checkbox>
        <br />
        <Checkbox
          value={"Excellent"}
          onChange={handleChange}
          isChecked={service.includes("Excellent")}
        >
          Excellent
        </Checkbox>
        <br />
        <Checkbox
          value={"Exceptional"}
          onChange={handleChange}
          isChecked={service.includes("Exceptional")}
        >
          Exceptional
        </Checkbox>
        <br />
        <br />
      </Box>
      {/* Filter by Price */}
      <Box>
        <b>Price per night</b> <br />
        <Text>{`$0 to $${price <= 999 ? price : price + "+"}`}</Text>
        <input
          type="range"
          max={1000}
          onChange={handlePrice}
          value={price}
        ></input>
      </Box>
      <br />
      {/* filter by Rating */}
      {/* <Box>
        <b>Star rating</b> <br />
        <Stack spacing={1} direction="column">
          <Checkbox
            onChange={HandleStar}
            value={"1"}
            isChecked={star.includes("1")}
          >
            <StarIcon />
          </Checkbox>

          <Checkbox
            onChange={HandleStar}
            value={2}
            isChecked={star.includes("2")}
          >
            <StarIcon />
            <StarIcon />
          </Checkbox>
          <Checkbox
            onChange={HandleStar}
            value={3}
            isChecked={star.includes("3")}
          >
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Checkbox>
          <Checkbox
            onChange={HandleStar}
            value={4}
            isChecked={star.includes("4")}
          >
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Checkbox>
          <Checkbox
            onChange={HandleStar}
            value={5}
            isChecked={star.includes("5")}
          >
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Checkbox>
        </Stack>
      </Box> */}
    </Box>
  );
};
