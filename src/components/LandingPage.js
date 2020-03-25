import React, { Component } from 'react';
import avatar from '../avatar.png';

class LandingPage extends Component {
    render() {
        return (
             <div className="landing-grid"> 
                 <div>
                  <img 
                   src={avatar}
                   alt="avatar"
                   className="avatar-img"
                  />
                                 
                  
                  <div className="banner-text">
                   <h2>Hi, I`m Oleksandr</h2>
                   <h1>Front End Developer</h1>
                   <hr/>
                   <p>HTML/CSS |  JavaScript | React</p>
                   <div className="social-links">
                    <a href="https://www.linkedin.com/in/oleksandrholubenko/" rel="noopener noreferrer" target="_blank">
                     <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/AlexHolubenko" rel="noopener noreferrer" target="_blank">
                     <i className="fa fa-github-square" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100019013498370&ref=bookmarks" rel="noopener noreferrer" target="_blank">
                     <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </a>
                   </div>
                  </div>
                 </div>
             </div>
        )
    }
}
export default LandingPage;