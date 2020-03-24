import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return (
     
      <header className="header">
       <h1><Link to="/">AlexDev</Link></h1>
       <nav className="nav-top">
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
       </nav>
      </header>
     
    )
  }
  
}

export default Header;
