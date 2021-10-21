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
    <br />
    <Fade bottom cascade>
    <div className= 'whatever'>
    <Link to='/wayfarer'>
    <img className='loveit'src={`${process.env.PUBLIC_URL}/images/iconwayfarer.png`} alt=""/>
    </Link>
    &nbsp; &nbsp;
    <Link to='/claude9'>
    <img className='loveit'src={`${process.env.PUBLIC_URL}/images/C9icon.png`} alt=""/>
    </Link>
    &nbsp; &nbsp;
    <Link to='/lizzie'>
    <img className='loveit'src={`${process.env.PUBLIC_URL}/images/Lizzieicon.png`} alt=""/>
    </Link>
    &nbsp; &nbsp;
    <Link to='/engayged'>
    <img className='loveit'src={`${process.env.PUBLIC_URL}/images/diamond.png`} alt=""/>
    </Link>
    &nbsp; &nbsp;
    <Link to='/oftheearth'>
    <img className='loveit'src={`${process.env.PUBLIC_URL}/images/oftheearth.png`} alt=""/>
    </Link>
    {/* <GalleryReact /> */}
    </div>
    </Fade>
    </>
    )
}
    
export default Work