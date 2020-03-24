import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render(){
    return (
     
      <header className="header">
       <h1><Link to="/portfolio/">AlexDev</Link></h1>
       <nav className="nav-top">
        <Link to="/portfolio/resume">Resume</Link>
        <Link to="/portfolio/projects">Projects</Link>
       </nav>
      </header>
     
    )
  }
  
}

export default Header;
