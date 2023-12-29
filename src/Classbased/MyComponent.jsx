import { Component, ReactDOM } from "react";

/* creating class based component and using state to store the data */
class MyComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"Mayank",
            age:"21",
            derivedday:null,
        }
        console.log("Constructor call");
    }

    static getDerivedStateFromProps(nextProps,prevState){
                
         console.log("static getDerivedStateFromProps call");
        //  console.log(nextProps.day);
        //  console.log(prevState.derivedday);
        if(nextProps.day !== prevState.derivedday){

            return{

                derivedday: nextProps.day ,
                
            }; 
        }

            return null;

    }
    

    componentDidMount(){
        console.log("componentdidmount call");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return false;
    }
    render(){
        console.log("render method call");
        return <>
        <h1>Here name  and age is visible due to state:</h1>
        <p> Name -{this.state.name} , Age -{this.state.age} </p> 
        <p>Day : {this.props.day}</p>
        <p>derivedday value from props - {this.state.derivedday}</p>
        </>;
    }

}
export default MyComponent;