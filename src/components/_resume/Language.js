import React, { Component } from 'react';

class Language extends Component {
 render(){
  const languages = this.props.languages.map((lang,i) => (
   <li key={i}>{lang.name} - {lang.level}</li>
  ))
  return (
   <div className="languages">
    <h4 className="skill-type">Languages:</h4>
     <ul className="skill-review">{languages}</ul>
   </div>
  )
 }
}
export default Language;