import React, { Component } from 'react';

class ProjectCard extends Component {
  render(){
    return (
     <div className="project-card">
       <img src={this.props.item.img} alt="project"/>
       <h2>{this.props.item.name}</h2>
       <p>Tools: {this.props.item.tools}</p>
       <div className="link-btns">
        <a href={this.props.item.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={this.props.item.live} target="_blank" rel="noopener noreferrer">Live</a>
       </div>
     </div>
    )
  }
  
}

export default ProjectCard;