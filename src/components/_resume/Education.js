import React, { Component } from 'react';

class Education extends Component {
 render(){
  return (
   <div className="edu">
    <div className="edu-years">
     <p>{this.props.startYear} - {this.props.endYear}</p>
    </div>
    <div className="edu-university">
     <h4 style={{marginTop: '0'}}>{this.props.academicDegree}, {this.props.schoolName}</h4>
     <p>Field of study {this.props.fieldStudy}</p>
    </div>
   </div>
  )
 }
}
export default Education;