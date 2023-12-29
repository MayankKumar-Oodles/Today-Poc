import { ReactDOM } from "react";
import { Component } from "react";
import Timer from "./functionalbased/Timer";
import MyComponent from "./Classbased/MyComponent";
// import Counter from "./Classbased/Counter";
import FavouriteColor from "./functionalbased/FavouriteColor";
import Counter from "./functionalbased/Counter";
 
 
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
                 <Timer/>
                 <Counter/>
                     
                  
                </>
          }
 }
 export default App;
  