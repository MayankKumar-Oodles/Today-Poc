import { useContext ,memo} from "react"

import { UserContext } from "./Parent";
 const Child = ({Learning,count}) => {
    console.log("child component");
    const name = useContext(UserContext);
   return (
     <div>
                {/* <h1>Class based Component and user name is {name} </h1> */}
     </div>
   )
 }
 
 export default memo(Child);
 