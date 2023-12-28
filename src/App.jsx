import { ReactDOM } from "react";
import { Component } from "react";
import MyComponent from "./Classbased/MyComponent";
 
 class App extends Component{
          constructor(props){
            super(props);
            this.state={
                 day:"friday",
            }

          }
          render(){
                return<>
                 <MyComponent day={this.state.day}></MyComponent>
                </>
          }
 }
 export default App;
  