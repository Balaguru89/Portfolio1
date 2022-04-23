import React from 'react';
import Header from './Component/Header/Header';
import SkillsContainer from './Component/SkillsContainer/SkillsContainer';
import TopContainer from './Component/TopContainer/TopContainer';
import ProjectContainer from './Component/ProjectContainer/ProjectContainer';
import './App.css';
import ExperienceContainer from './Component/ExperienceContainer/ExperienceContainer';
import Contact from './Component/Contact/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillsContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
      
    </div>
  )
}

export default App;