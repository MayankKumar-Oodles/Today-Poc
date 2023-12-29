import { Component } from "react";
import Color from "./Color";

class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        val : true,
      };
    }
  
    // shouldComponentUpdate is called before rendering when props or state change
    shouldComponentUpdate(nextProps, nextState) {
      // Only update if the count is a multiple of 3
      return nextState.count % 3 === 0;
    }
    componentDidMount(){
              setTimeout(()=>{
                this.setState({val:false});
              },3000)
    }
  
    incrementCounter = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
    componentDidUpdate(){
        console.log("componentDidUpdate method call"); 

    }
    

     
    render() {
      console.log('Render');
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.incrementCounter}>Increment</button>
          {
            this.state.val ? <Color/> : (null)
          }
          
         
        </div>
      );
    }
  }
  
  export default Counter;