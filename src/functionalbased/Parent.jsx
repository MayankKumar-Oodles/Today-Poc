import React, { createContext ,useState } from 'react'
import Child from './Child';

export const UserContext=createContext();

const Parent = () => {
      
     const [user,setUser]=useState("Raman");


  return (
          <UserContext.Provider value={user}>
                           
                           <h1>Parent Component and user name is {user} </h1>
                           <Child/>
                           
                             
          </UserContext.Provider>
  )
  }
  export default Parent;
