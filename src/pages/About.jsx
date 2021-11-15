import React from "react";
import {Fade} from 'react-reveal'
import { Link } from 'react-router-dom'


function About(){
    return(
    <body className="projectPage">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className='abouttitle'>About</h1>
                <header className='inlinewayfarer'>
                    <Fade left>
                        <img className='headshot' src={process.env.PUBLIC_URL + '/images/me.JPG'} alt=""/>
                    </Fade>
                    <div className="about">
                        <Fade right>
                        <h2 className="tools">UX Engineer / UX Unicorn / Front End Developer </h2>
                        <br />
                        <p className='wayfarerbody'>
                            I am a recent bootcamp graduate delving into the field of front end development. 
                            I have years of experience with designing for small businesses, and it is my hope 
                            to find a role that allows me the mentorship to develop my coding abilities as well as design. 
                        </p>
                        <br />
                        <div >
                            <Link to='/Contact'>
                                <h3 className='yar'>Contact</h3>
                            </Link>
                            &nbsp; &nbsp; 
                        </div>
                        </Fade>
                    </div>
                </header>

                <br />
                <br />
                <br />
            </body>

    )
}
    
export default About