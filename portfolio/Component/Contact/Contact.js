import { IconButton } from '@material-ui/core';
import { Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import React from 'react';
import { Element } from 'react-scroll';
import './Contact.css';

const Contact = () => {
    return (
        <Element className='contact' id='contact' >
            <h1>Contact</h1>
            <div className='contact__container'>
                <p>
                    Email : <span>gurubalasuramani@gmail.com</span>
                </p>
                <p>
                    Github Username : <span>@Balaguru89</span>
                </p>
                <p>
                    Conatct No : <span>8072794033, 9443398210</span>
                </p>
                <div className='contact__icons'>
                    <a href='https://www.instagram.com/gurubalasubramani/?hl=en' target=" _blank">
                        <IconButton>
                            <Instagram />

                        </IconButton>
                        </a>

                        <a href='https://www.facebook.com/profile.php?id=100000959558866' target=" _blank">
                        <IconButton>
                            <Facebook />

                        </IconButton>
                        </a>

                        <a href='https://www.linkedin.com/in/balasubiramani-g-79b587234/' target=" _blank">
                        <IconButton>
                            <LinkedIn />

                        </IconButton>
                        </a>

                </div>



            </div>



        </Element>
    )
}

export default Contact
