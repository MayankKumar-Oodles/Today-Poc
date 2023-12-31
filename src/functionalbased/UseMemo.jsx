import React, { useState ,useMemo} from 'react'



const UseMemo = () => {

  const [add,setAdd]=useState(0);
  const [sub,setSubtract]=useState(100);

  const mutiply=useMemo(()=>{
    console.log("hello");
    return add*10;
  },[add])
  

  return (
    <div>
              <span>{add}</span><br/>
              <button onClick={()=>{setAdd(add+1)}}>Add</button>{mutiply} <br/>
              <span>{sub}</span><br/>
              <button onClick={()=>{setSubtract(sub-1)}}>Sub</button>
    </div>
  )
}

export default UseMemo
