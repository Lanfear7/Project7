import React, { Component } from 'react'
import {
    NavLink
  } from "react-router-dom";

class Nav extends Component {

  state = {
    cats: 'cats',
    dogs: 'dogs',
    computers: 'computers'
  }

  cats = () => {
    this.props.onClick(this.state.cats);
  }

  dogs = () => {
    this.props.onClick(this.state.dogs);
  }

  computers = () => {
    this.props.onClick(this.state.computers);
  }

  render(){
    return(
      <nav className="main-nav">
        <ul>
          <li><NavLink onClick={this.cats} to='/Cats'>Cats</NavLink></li>
          <li><NavLink onClick={this.dogs} to='/Dogs'>Dogs</NavLink></li>
          <li><NavLink onClick={this.computers} to='/Computers'>Computers</NavLink></li>
        </ul>
      </nav>
    )
  } 
}

export default Nav