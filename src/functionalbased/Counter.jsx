import React from 'react'
import { useState,useEffect } from 'react'
const Counter = () => {

        const [count,setCount]=useState(0);
        const[calculation,setCalculation]=useState(0);

         useEffect(()=>{
                     setCalculation(()=>count*2);
        },[count])


  return (
    <div>
            <h1>Count : {count}</h1>
            <button type='button' onClick={()=>{setCount((count)=>count+1)}}> Increment count</button>
            <p>calculation : {calculation}</p>
    </div>
  )
}

export default Counter;
