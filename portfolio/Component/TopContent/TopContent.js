import React from 'react';
import { Link } from 'react-scroll';
import "./TopContent.css";

const TopContent = () => {
    return (
        <div className='topcontent'>
            <div className='topcontent__container'>
                <h1>Mr.Balasubiramani</h1>
                <p>A professional Web and App Developer</p>
                <a href="https://drive.google.com/file/d/11ej6RExPbNJpFN7OIATbLBZvoyEx6iHU/view?usp=drivesdk" 
                target="_blank" rel="noopener noreferrer" >
                    <button className='topcontent__downloadButton'>Download CV</button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className='topcontent__workButton'>My Work</button>    
                </Link>

            </div>
            
        </div>
    )
}

export default TopContent;
