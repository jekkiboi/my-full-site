import React from 'react';
import { Link } from 'react-router-dom'


function Footer(){
    return(
        <div className='footer'>
           <span className='inlinefooter'> 
                <span className='footerlinks'>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/" className='public-footer'>Home</Link>
                      &nbsp;&nbsp;
                      <Link to="/work" className='public-footer'>work</Link>
                      &nbsp;&nbsp;
                      <Link to="/about" className='public-footer'>About</Link>
                      &nbsp;&nbsp;
                      <Link to="/contact" className='public-footer'>Contact</Link>
                </span>
            </span>
            <div className='copyright'> © 2021 JACK MAYER </div>
            <br />
        </div>
    )
}
export default Footer