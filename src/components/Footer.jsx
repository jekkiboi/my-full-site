import React from 'react';
import { Link } from 'react-router-dom'
// import SocialSharer from '../components/SocialSharer'


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
                      <Link to="/design" className='public-footer'>Design</Link>
                      &nbsp;&nbsp;
                      <Link to="/about" className='public-footer'>About</Link>
                    {/* <div className='footerlinklist'> <SocialSharer /> </div> */}
                </span>
            </span>
            <div className='copyright'> © 2021 JACK MAYER </div>
        </div>
    )
}
export default Footer