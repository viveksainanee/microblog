import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Microblog</h1>
        <p>Get in the Rithm of bloggin!</p>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/new">Add a new post</NavLink>
      </div>
    );
  }
}

export default Header;
