import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Placecard from './Placecard'


export const Result = () => {
  const [cities,setCities] = useState([])
  const [searchParams] = useSearchParams()
  let city=searchParams.get("city")

  useEffect(()=>{
    axios.get(`http://localhost:8080/destination?city=${city}`).then((response) => {
        setCities(response.data)
     console.log(response.data)
    });
  },[])
  return (
    <>
    {cities.map((el)=>(
      <Placecard key={el.id} image={el.image} title={el.title} price={el.price} desc={el.desc}/>
    ))}
    </>
  )
}
