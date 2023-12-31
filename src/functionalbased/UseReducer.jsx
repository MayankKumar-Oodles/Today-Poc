import React from 'react'
import { useReducer } from 'react'

const reducer =(state,action)=>{
     if(action.type === "INCREMENT"){
        return state +1;
     }
     if(action.type === "DECREMENT"){
        return state -1;
     }
}
const UseReducer = () => {

   const [state , dispatch]=useReducer(reducer,0);
   
    
  return (
    <div>

          <h1>{state}</h1>
          <button   onClick={()=>{dispatch({type:"INCREMENT"})}}>Inc</button>
          <button   onClick={()=>{dispatch({type:"DECREMENT"})}}>Dec</button>
      
    </div>
  )
}

export default UseReducer;
