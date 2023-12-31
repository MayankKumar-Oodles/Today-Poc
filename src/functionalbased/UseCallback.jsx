import React, { useCallback, useState } from 'react'
import Child from './Child';
const UseCallback = () => {

    const[count,setCount]=useState(0);
    const [add,setAdd]=useState(0);
    const Learning=useCallback(()=>{
        //some operation
    },[count])
        return (
            <div>   
                     <h1>Learning UseCallback</h1>
                     <h1>{add}</h1>
                     <Child learning={Learning} count={count}/>
                     <button onClick={()=>{setAdd(add+1)}}>Add</button>
                     <h1>{count}</h1>
                     <button onClick={()=>{setCount(count+3)}}>Count</button>
            </div>
    )
}

export default UseCallback
