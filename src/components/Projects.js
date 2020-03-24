import React, { Component } from 'react';
import ProjectCard from './_projects/ProjectCard';
import recipe from './_projects/recipe.png';
import natours from './_projects/natours.png';
import trillo from './_projects/trillo.png';
import todos from './_projects/todos.png';

class Projects extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          name: "Recipe App",
          tools: 'HTML/CSS, JavaScript, React',
          img: recipe,
          github: 'https://github.com/AlexHolubenko/recipe-app',
          live: ' https://alexholubenko.github.io/recipe-app/'
        },
        {
          name: "Todo App",
          tools: 'HTML/CSS, JavaScript, React',
          img: todos,
          github: 'https://github.com/AlexHolubenko/Todo-App',
          live: 'https://alexholubenko.github.io/Todo-App/'
        },
        {
          name: "Natours",
          tools: 'HTML/CSS, Sass',
          img: natours,
          github: 'https://github.com/AlexHolubenko/Natours-no-flex-sass-',
          live: 'https://alexholubenko.github.io/Natours-no-flex-sass-/.'
        },
        {
          name: "Trillo",
          tools: 'HTML/CSS, Sass',
          img: trillo,
          github: 'https://github.com/AlexHolubenko/Trillo',
          live: 'https://alexholubenko.github.io/Trillo/'
        }
      ]
    }
  }
  render(){
    const projects = this.state.projects.map((item,i) =>(
       <ProjectCard key={i} item={item}/>
    ));
    return (
     <div className="projects">
       {projects}
     </div>
    )
  }
  
}

export default Projects;