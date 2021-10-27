import React from "react";
import { Link } from 'react-router-dom'
import {Fade} from 'react-reveal'
// import GalleryReact from "../components/tabMenu/GalleryReact";

function Work(){
    return(
    <>
    <br />
    <br />
    <br />
        <h1 className='worktitle'>work</h1>
        <h2 className="worktools">Web Applications / Designs </h2>
    <Fade bottom cascade>
        <div className= 'whatever'>
            <Link to='/wayfarer'>
                <img className='loveit'src={`${process.env.PUBLIC_URL}/images/wayfarerShadow.png`} alt=""/>
            </Link>
            &nbsp; &nbsp;
            <Link to='/claude9'>
                <img className='loveit'src={`${process.env.PUBLIC_URL}/images/claude9Shadow.png`} alt=""/>
            </Link>
            &nbsp; &nbsp;
            <Link to='/lizzie'>
                <img className='loveit'src={`${process.env.PUBLIC_URL}/images/lizzieShadow.png`} alt=""/>
            </Link>
            &nbsp; &nbsp;
            <Link to='/engayged'>
                <img className='loveit'src={`${process.env.PUBLIC_URL}/images/diamondShadow.png`} alt=""/>
            </Link>
            &nbsp; &nbsp;
            <Link to='/oftheearth'>
                <img className='loveit'src={`${process.env.PUBLIC_URL}/images/oteShadow.png`} alt=""/>
            </Link>
            {/* <GalleryReact /> */}
        </div>
    </Fade>
    </>
    )
}
    
export default Work