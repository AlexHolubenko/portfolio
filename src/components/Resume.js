import React, { Component } from 'react';
import Education from './_resume/Education';
import Experience from './_resume/Experience';
import Language from './_resume/Language';
import Technical from './_resume/Technical';
import avatar from './_resume/resume-avatar.png';


class Resume extends Component {
  
    render() {
        return (
            <div className="resume-grid">
              <div className="resume-left-col">
               <div className="resume-img-container">
                <img className="resume-img"
                 src={avatar}
                 alt="avatar"
                 />
               </div>
               <h2 className="full-name">Oleksandr Holubenko</h2>
               <h4 className="job-position">Front End Developer</h4>
               <p className="summery">
                Enthusiastic, team player Front-end Developer with passion for creating and optimizing 
                interactive, user-friendly, and feature-rich websites. Skilled in HTML, CSS and JavaScript. 
               </p>
               <div className="short-contact-info">
                <h5>Phone:</h5>
                <p>+38 (063) 11-47-913</p>
                <h5>Email:</h5>
                <p>ovholubenko@gmail.com</p>
                <h5>Skype:</h5>
                <p>alex.holubenko</p>
               </div>
               
              </div>
              <div className="resume-right-col">
               <h2>Courses</h2>
                <Experience 
                  start='February 2020'
                  end='Present'
                  jobName='Online Course "The Advanced Web Developer Bootcamp"'
                  descriptionJob={['Built responsive applications using modern CSS technologies like flexbox',
                  'Learnt front end library React and master the fundamentals around state, props, hooks and the component lifecycle',
                  'Added routing to a single page application with routing library for react, React Router',]}
                />
               <h2>Skills</h2>
                <Language languages={[{name: 'Ukrainian', level: 'Native'},
                  {name: 'English', level: 'Intermediate'},
                  {name: 'Russian', level: 'Proficiency'}]}/>
                <Technical techSkills={['Html/Css','Sass','Bootstrap','JavaScript','jQuery','Ajax','React','Npm']}/>  
               <h2>Education</h2>
               <Education 
                 startYear='September 2018' 
                 endYear='December 2019'
                 academicDegree='Master of Computer Science'
                 schoolName='Lviv Polytechnic National University'
                 fieldStudy='"Automation and computer-integrated technologies"'
                />
               <Education 
                 startYear='September 2014'
                 endYear='June 2018'
                 academicDegree='Bachelor of Computer Science'
                 schoolName='Lviv Polytechnic National University'
                 fieldStudy='"Systems engineering"'
                
                />
              </div>
            </div>
        )
    }
}
export default Resume;