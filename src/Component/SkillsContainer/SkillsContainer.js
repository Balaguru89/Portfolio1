import React from 'react';
import {Element} from 'react-scroll';
import skillimg from '../../assets/Skillimg.jpg';
import LinearProgress from "@material-ui/core/LinearProgress";
import './SkillsContainer.css';


const SkillsContainer = () => {
    return (
        <Element className='skillscontainer' id='skills'>
            <div className='skillscontainer__image'>
            <img src= {skillimg} alt='' />

                </div>
        <div className='skillscontainer__text' >
            <h2>SkillSET</h2>
            <div className='skillscontainer__skillset'>
                <h5>HTML</h5>
                <div className='skillscontainer__ slider skillscontainer__slider1'>
                <LinearProgress variant='determinate' value={90}  />
                </div>
            </div>
            <div className='skillscontainer__skillset'>
                <h5>CSS</h5>
                <div className='skillscontainer__ slider skillscontainer__slider2'>
                <LinearProgress variant='determinate' value={85}  />
                </div>
            </div>
            <div className='skillscontainer__skillset'>
                <h5>JavaScript</h5>
                <div className='skillscontainer__ slider skillscontainer__slider3'>
                <LinearProgress variant='determinate' value={80}  />
                </div>
            </div>
            <div className='skillscontainer__skillset'>
                <h5>React</h5>
                <div className='skillscontainer__ slider skillscontainer__slider4'>
                <LinearProgress variant='determinate' value={70}  />
                </div>
            </div>
            <div className='skillscontainer__skillset'>
                <h5>MySQL</h5>
                <div className='skillscontainer__ slider skillscontainer__slider5'>
                <LinearProgress variant='determinate' value={80}  />
                </div>
            </div>
            <div className='skillscontainer__skillset'>
                <h5>PHP</h5>
                <div className='skillscontainer__ slider skillscontainer__slider6'>
                <LinearProgress variant='determinate' value={70}  />
                </div>
            </div>
        </div>
        </Element>

    )
}

export default SkillsContainer
