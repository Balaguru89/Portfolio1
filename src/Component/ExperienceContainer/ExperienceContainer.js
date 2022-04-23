import React from 'react';
import { Element } from 'react-scroll';
import Experience from '../ExperienceBox/Experience';
import './ExperienceContainer.css';

const ExperienceContainer = () => {
    return (
      <Element className='experiencecontainer' id='exp'>
          <h1>Experience
          </h1>
          <div className='experiencecontainer__info '>
              <Experience number="+2" title="Clients" />
              <Experience number="3+" title="Projects" style={{backgroundColor:"#f64c08"}}  />
              <Experience number="10+" title="Months Experience" /> 
          </div>
      </Element>
    )
}

export default ExperienceContainer;