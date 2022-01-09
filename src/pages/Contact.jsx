import React from "react";
import {Fade} from 'react-reveal'
// import Hello from './Hello'

//https://docs.google.com/document/d/1jcVtLGAoKYS_nixHjHUVH1J1RaAJ152RCtAP1IUCNpQ/edit?usp=sharing


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
                    <h1 className='codertitle'>What I've Been up to</h1>
                    </Fade>
                    <Fade right>
                    <p className='coder'>
                        Feel Free to reach out if you're interested in collaborating,<br /> 
                        hiring, or even just have questions about my projects. <br />
                         You can also reach me at <a className="yo" href="https://gmail.com" target='_blank'>Jackiemayer14@gmail.com</a>.<br />
                         <br />
                         <a href="https://docs.google.com/document/d/1jcVtLGAoKYS_nixHjHUVH1J1RaAJ152RCtAP1IUCNpQ/edit?usp=sharing" target='resume'> 
                            View My Resume
                        </a>
                        <br />
                        <br />
                         Thanks for visiting!  
                    </p>
                    <br />
                    </Fade>
                    </div>
                <header className='inlinecontact'>
                    <Fade right>
                    {/* <Hello /> */}
                    &nbsp; &nbsp; 
                        <a href="https://github.com/jekkiboi" target='github'> 
                        <img className='codelinks1'src={`${process.env.PUBLIC_URL}/images/githubmore.png`}/>
                        </a>
                      
                        <a href="https://github.com/jekkiboi" target='hackerrank'> 
                        <img className='codelinks2'src={`${process.env.PUBLIC_URL}/images/hackerrank.png`}/>
                        </a>
                        &nbsp; &nbsp; 
                   
                    </Fade>
                </header>
                <br />
                <br />
                <br />
                <header className='inlinecontact'>
                &nbsp; &nbsp;
                        <a href="https://www.codewars.com/users/jekkiboi" target='codewars'> 
                            <img className='codelinks3'src={`${process.env.PUBLIC_URL}/images/codewars.png`}/>
                        </a>
                       
                        <a href="https://leetcode.com/Jekkiboi/" target='leetcode'> 
                            <img className='codelinks4'src={`${process.env.PUBLIC_URL}/images/leetcode.png`}/>
                        </a>
                        &nbsp; &nbsp; 
                </header>

                <br />
                <br />
                <br />
            </body>

    )
}
    
export default Contact