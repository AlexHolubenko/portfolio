import React from 'react';
import {  Switch, Route } from "react-router-dom";
import Resume from './Resume';
import Projects from './Projects';
import LandingPage from './LandingPage';


function Main() {
    return (
       <Switch>
         <Route exact path='/portfolio' component={LandingPage}/>
         <Route exact path='/portfolio/resume' component={Resume}/>
         <Route exact path='/portfolio/projects' component={Projects}/>
       </Switch>
    )
 }


export default Main;
