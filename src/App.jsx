import { ReactDOM } from "react";
import { Component } from "react";
import Timer from "./functionalbased/Timer";
import MyComponent from "./Classbased/MyComponent";
// import Counter from "./Classbased/Counter";
import FavouriteColor from "./functionalbased/FavouriteColor";
import Counter from "./functionalbased/Counter";
 import Component1 from "./functionalbased/Relation";
import Parent from "./functionalbased/Parent";
import Child from "./functionalbased/Child";
import Input from "./functionalbased/Input";
import UseReducer from "./functionalbased/UseReducer";
import UseMemo from "./functionalbased/UseMemo";
import UseCallback from "./functionalbased/UseCallback";
 class App extends Component{
          constructor(props){
            super(props);
            this.state={
                 day:"friday",
            }

          }
          render(){
                return<>
                 {/* <MyComponent day={this.state.day}></MyComponent>
                 <Counter></Counter> */}
                 {/* <FavouriteColor/> */}
                 {/* <Timer/>
                 <Counter/> */}
                 {/* <Component1/> */}
                   {/* <Parent/>
                   <Input/> */}
                   {/* <UseReducer/> */}
                  {/* <UseMemo/> */}
                  <UseCallback/>

          
                 
                     
                  
                </>
          }
 }
 export default App;
  