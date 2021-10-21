import React from "react";
import {Fade} from 'react-reveal'
import { Link, } from 'react-router-dom'


function About(){
    return(

    <body className="projectPage">
            <br />
            <br />
            <br />
            <br />
            <br />
                <header className='inlinewayfarer'>
                    <Fade left>
                    <img className='wayfarerlaptop' src={process.env.PUBLIC_URL + '/images/me.JPG'} alt=""/>
                    </Fade>
                    <div className="about">
                        <Fade right>
                        <h2 className="tools">UX Engineer / UX Unicorn / Front End Developer </h2>
                        <br />
                        <h1 className='wayfarertitle'>About</h1>
                    
                        <p className='wayfarerbody'>
                            I am a recent bootcamp graduate delving into the field of front end development. I have year of experience with designing for small businesses, and it is my hope to find a role that allows me the freedom to code and design. 
                        </p>
                        <br />
                        <div class='links'>
                            <Link to='/Contact'>
                            Contact 
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