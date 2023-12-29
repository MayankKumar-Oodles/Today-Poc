import React, { useState } from 'react'

const Car = () => {

    const [car,setCar]=useState({
        color:'Dark brown',
        brand:'Maruti',
        model:'Abc',
        year:1234,
    })
    const UpdateColor=()=>{
        setCar((previousState)=>{
             return{ ...previousState,color:'black'}
        })
    }

    

  return (
    <>
      <h1>My Favorite car is {car.brand}</h1>
      <p>It's {car.color} color ,  {car.model} and of year {car.year}</p>
      <button type="button" onClick={UpdateColor}>  change Color</button>
    </>
  )
}

export default Car;
