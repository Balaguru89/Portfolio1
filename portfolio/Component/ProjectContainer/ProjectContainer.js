import React from 'react';
import {Element} from 'react-scroll';
import Project from '../Project/Project';
import './ProjectContainer.css'
import project1 from '../../assets/project1.JPG'
import project2 from '../../assets/project7.JPG'
import project3 from '../../assets/project2.JPG'
import project4 from '../../assets/project 4.JPG'
import project5 from '../../assets/project5.JPG'
import project6 from '../../assets/project 6.JPG'

const ProjectContainer = () => {
 const Projects = [
      {
     img:project1,
     title:"Registration Form",
     desc: "Online registration forms make it easy to plan your next event such as conferences, workshops or classes.lets your customers fill out the registration form from any smartphone, tablet or computer.",
     link:"www.facebook.com",
    },

    {
        img:project2 ,
        title:"Fetch data in table form, from country API",
        desc: "The user can view the 250 numbers of country details in table form from country API.",
        link:"www.facebook.com",
       },

       {
        img:project3,
        title:"Form Validation",
        desc: "A simple user form created and the given input fields are validated for relevent data filling and avoid to blank input field by user. ",
        link:"www.facebook.com",
       },

       {
        img:project4,
        title:"Counter App",
        desc: "While visiting different shopping websites like Flipkart and Amazon you have seen a counter on each product, that counter is used to specify the quantity of that product.",
        link:"www.facebook.com",
       },

       {
        img:project5,
        title:"Fetch API Data in dropdown ",
        desc: "The user can select required country from given 250 numbers of country, and can view relevent state and cities in further dropdown from country API. ",
        link:"www.facebook.com",
       },

       {
        img:project6,
        title:"Food Receipe App",
        desc: "The user can get the required food receipes through search bar given available in the API data ",
        link:"www.facebook.com",
       },


 ];

    return ( 
        <Element className='projectcontainer' id='projects' >

            <h1>Projects</h1>
            <p>Here are some projects which i have done</p>
            <div className='projectcontainer__projects'>
                {
                Projects.map ((project,index) => {
                    return(
                        <Project 
                        key={index}
                        img={project.img}
                        title={project.title}
                        desc={project.desc}
                        link={project.link} />
                    );
                })}

            </div>


        </Element>


         

    );
};

export default ProjectContainer;
