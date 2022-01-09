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

            <h1 className='abouttitle'>Lets Link Up</h1>
                <header>
                    <Fade left>
                        <img className='headshot' src={process.env.PUBLIC_URL + '/images/me.JPG'} alt=""/>
                    </Fade>
                    <div className="about">
                        <Fade right>
                        <br />
                        <br />
                        <br />
                        <h2 className="tools">UX Engineer / UX Unicorn / Front End Developer </h2>
                        <br />
                        <p className='aboutbody'>
                            I am a freelnce designer delving into the field of front end development. 
                            I have years of experience with designing for small businesses, and it is my hope 
                            to find a role that allows me the mentorship to develop my coding abilities as well as design. Looking forward to connecting with you! 
                            <br />
                            <a href="https://docs.google.com/document/d/1jcVtLGAoKYS_nixHjHUVH1J1RaAJ152RCtAP1IUCNpQ/edit?usp=sharing" target='resume'> 
                            View My Resume
                            </a>
                            <br />
                             <a className="yo" href="https://gmail.com" target='_blank'>Jackiemayer14@gmail.com</a>. 
                             
                        </p>
                        <br />
                        <div >
                            <Link to='/code'>
                                <h3 className='yar'>My Code Challenges Practice</h3>
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