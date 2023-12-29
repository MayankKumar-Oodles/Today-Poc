import { ReactDOM } from "react";
import { useState } from "react";

function Component1(){


      const[user,setUser]=useState("jarvis");

        return(
                <>
                    <h1>Component 1</h1>
                    <p> {`hello ${user}!`}</p>
                    <Component2 user={user}/>

                </>
        );

        
    }
    function Component2({user}){
           
        return(
            <>
               <h2>Component 2</h2>
                <Component3 user={user}/>
                
            </>
   );
       }


   function Component3({user}){
                    
    return(
        <>
        <h2>Component 3</h2>
            <p>{`hello ${user} Again !`}</p>
            
        </>
);
}

 export default Component1;