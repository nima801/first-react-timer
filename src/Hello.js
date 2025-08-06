import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";

class Hello extends React.Component{
  render(){
    return(
      <h1>{this.props.title}</h1>
    )
  }
}

export default Hello;