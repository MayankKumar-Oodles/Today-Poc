import { ReactDOM } from "react";
import { Component } from "react";
import MyComponent from "./Classbased/MyComponent";
import Counter from "./Classbased/Counter";
 
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
                 <Counter></Counter>
                </>
          }
 }
 export default App;
  