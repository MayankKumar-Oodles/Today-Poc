import { Component, ReactDOM } from "react";

/* creating class based component and using state to store the data */
class MyComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"Mayank",
            age:"21",
        }
    }
    
    render(){
        return <>
        <h1>Here name  and age is visible due to state:</h1>
        <p> Name -{this.state.name} , Age -{this.state.age} </p> 
        /* by using props we pass data from App to Mycomponent */
        <p>Day : {this.props.day}</p>
        </>;
    }

}
export default MyComponent;