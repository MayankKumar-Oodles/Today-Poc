 import React, { useEffect } from 'react'
 import { useState } from 'react'
 
 const Timer = () => {

     const[count,setCount]=useState(0);

     useEffect(()=>{
        let timer=setTimeout(()=>{
            setCount((count)=>count +1)
        },1000)

        return ()=>{ clearTimeout(timer);}
     },[])
   return (
    
     <div>
          <h1>I have rendered {count} times.</h1>
     </div>
   )
 }
 
 export default Timer;
 