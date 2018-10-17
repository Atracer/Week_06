

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    newTodo: "",
    todos: [
      "Buy tea",
      "Buy boba",
      "Boil water",
      "Add boba",
      "Drain water",
      "Add tea"
    ],
  };
  render() {
    // let array = []
    // if(this.props.location.state.todos) {
    //   array = [...this.state, ...this.props.location.state.todos]
    // } else {
    //   array = this.state.todos
    // }
    return ( 
    <div>
        <h1> How to make boba at home</h1>
         {this.state.todos.map(todo => (
           <li key={todo}>
            {todo + " "}
           </li>
         ))}
         <li>{this.props.location.state.output} </li>
         {/* {this.setState({day: 7})} */}

      </div>);
  }
}

export default Home;