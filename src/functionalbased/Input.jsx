import React from 'react'
import { ReactDOM } from 'react';
import { useState ,useEffect,useRef } from 'react'
const Input = () => {

       const [inputValue , setInputValue]=useState();
       const previousInputValue=useRef();

       useEffect(()=>{
           previousInputValue.current=inputValue;
       },[inputValue])

       

  return (
    <div>    
              <input 
                 type="text" 
                 onChange={(e)=>{setInputValue(e.target.value)}} 
              />
             <h1>Curent input value : {inputValue}</h1>
             <h1>Previous input value : {previousInputValue.current}</h1>
    </div>
  )
}

export default Input;
