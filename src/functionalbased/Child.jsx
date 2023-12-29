import { useContext } from "react"

import { UserContext } from "./Parent";
 const Child = () => {
    const name = useContext(UserContext);
   return (
     <div>
                <h1>Class based Component and user name is {name} </h1>
     </div>
   )
 }
 
 export default Child;
 