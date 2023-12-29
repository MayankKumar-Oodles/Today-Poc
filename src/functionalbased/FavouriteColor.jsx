import React from 'react'
import { useState } from 'react'
import Car from './Car';

const FavouriteColor = () => {

        const [color,setColor]=useState("Red");

  return (
    
    <>
    <h1>My FavouriteColor is {color} .</h1>
    <button type="button" onClick={()=>{setColor("Blue")}}>change</button>
    <Car/>
    </>
  )
}

export default FavouriteColor
