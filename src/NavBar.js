import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="menu">Menu</Link>&nbsp;|&nbsp;
        <Link to="about">About</Link>
      </div>
    );
  }
}

export default NavBar;
