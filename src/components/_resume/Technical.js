import React, { Component } from 'react';


class Technical extends Component {
 render(){
  const techSkills = this.props.techSkills.map((skill,i) => (
    <li key={i}>{skill}</li>
   ))
  return (
   <div className="technical">
    <h4 className="skill-type">Technical:</h4>
     <ul className="skill-review">{techSkills}</ul>
   </div>
  )
 }
}
export default Technical;