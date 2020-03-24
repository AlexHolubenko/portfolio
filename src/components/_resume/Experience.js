import React, { Component } from 'react';

class Experience extends Component {
 render(){
  const jobTask = this.props.descriptionJob.map((j,index)=>(
    <li className="job-description-item" key={index}> - {j};</li>
    )
  )
  return (
   <div className="exp">
    <div className="exp-years">
     <p>{this.props.start} - {this.props.end}</p>
    </div>
    <div className="exp-job">
     <h4 style={{marginTop: '0'}}>{this.props.jobName}</h4>
     <ul className="exp-job-description">
       {jobTask}
      </ul>
    </div>
   </div>
  )
 }
}
export default Experience;