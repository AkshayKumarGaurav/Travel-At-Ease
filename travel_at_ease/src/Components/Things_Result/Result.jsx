import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Placecard from './Placecard'
import { Grid } from '@chakra-ui/react'


export const Result = () => {
  const [cities,setCities] = useState([])
  const [searchParams] = useSearchParams()
  let city=searchParams.get("city")

  useEffect(()=>{
    axios.get(`https://travelatease.onrender.com/destination?city=${city}`).then((response) => {
        setCities(response.data)
     console.log(response.data)
    });
  },[])
  return (
    <>
    <Grid templateColumns={{ base: 'repeat(1, 1fr)',  md: 'repeat(2, 1fr)',lg:'repeat(3, 1fr)'} }>
    {cities.map((el)=>(
      <Placecard key={el.id} image={el.image} title={el.title} price={el.price} desc={el.desc} type={el.type} time={el.time}/>
    ))}
    </Grid>
    
    </>
  )
}
