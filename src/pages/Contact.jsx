import React from "react";
import {Fade} from 'react-reveal'
import Hello from './Hello'


function Contact(){
    return(

    <body className="projectPage">
            <br />
            <br />
            <br />
            <br />
            <br />
                <div className=''>
                    <Fade left>
                    <br />
                    <h1 className='wayfarertitle'>Let's Connect</h1>
                    </Fade>
                    <Fade right>
                    <p className='wayfarerbody'>
                        Feel Free to reach out if you're interested in collaborating, 
                        hiring, or even just questions about my projects. You can also reach me at <a className="yo" href="https://gmail.com" target='_blank'>Jackiemayer14@gmail.com</a>. Thanks for visiting!  
                    </p>
                    <br />
                    </Fade>
                    </div>
                <header className='inlinecontact'>
                    <Fade right>
                    <Hello />
                    
                    &nbsp; &nbsp; 
                        <a href="https://github.com/jekkiboi" target='_blank'> 
                        <img className='circle'src={`${process.env.PUBLIC_URL}/images/github.png`}/>
                        </a>
                        &nbsp; &nbsp; 
                        <a href="https://www.linkedin.com/in/jack-mayer-se/" target='_blank'> 
                            <img className='circle'src={`${process.env.PUBLIC_URL}/images/linkedin.png`}/>
                        </a>
                        &nbsp; &nbsp; 
                    </Fade>
                
                </header>

                <br />
                <br />
                <br />
            </body>

    )
}
    
export default Contact