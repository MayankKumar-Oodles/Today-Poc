 import React, { Component } from 'react'
 
class Color extends Component {

    constructor(props){
        super(props);
        
        this.state={
            color:'red',
        }
    }

    changeColor=()=>{

        this.setState({color:'yellow',});
    }

    componentWillUnmount(){
        alert("color component is unmounted from ui");
        
    }

   render() {
     return (
       <>   
            <h1>This is color component.</h1>
           <p>color is {this.state.color}</p>
           <button type="button" onClick={this.changeColor}> Change</button>
       </>
         
      
     )
   }
 }

 export default Color;
 