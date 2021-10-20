import React from "react";
import {Fade, Zoom} from 'react-reveal'


function Wayfarer(){
    return(
        <body className="projectPage">
          <br />
          <br />
          <br />
          <br />
          <br />
            <header className='inlinewayfarer'>
                <div>
                    <h2 className="tools">React / Express/  Mongo DB</h2>
                    <br />
                    <h1 className='wayfarertitle'>Wayfarer</h1>
                    <br />
                    <p className='wayfarerbody'>
                        Me and four other General Assembly students teamed up to create an app that helps you share you love of travel with others. 
                        With Wayfarer, you can catalog where you've explored, share images as well as keep everything private by using hard-coded authentication. 
                    </p>
                    <br />
                    <div class='links'>
                        &nbsp; 
                        <a class="link" target="_blank" href="https://github.com/jekkiboi/TravelBlogClient">Source Code</a>
                        &nbsp; 
                        <a class="link" target="_blank" href="https://wayfarer333.netlify.app/">View Live</a>
                    </div>
                </div>
                <img className='wayfarerlaptop' src={process.env.PUBLIC_URL + '/images/wayfarerlaptop.png'} alt=""/>
            </header>


            <img className='wayfarerlayout' src={process.env.PUBLIC_URL + '/images/layoutwayfarer.png'} alt=""/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </body>
    )
}
    
export default Wayfarer