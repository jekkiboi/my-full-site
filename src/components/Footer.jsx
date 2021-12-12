import React from 'react';
import { Link } from 'react-router-dom'


function Footer(){
    return(
        <div className='footer'>
           <span className='inlinefooter'> 
                <span className='footerlinks'>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/my-full-site" className='public-footer'>Home</Link>
                      &nbsp;&nbsp;
                      <Link to="/about" className='public-footer'>About</Link>
                      &nbsp;&nbsp;
                      <Link to="/contact" className='public-footer'>Contact</Link>
                      &nbsp; &nbsp;
                    <a href="https://github.com/jekkiboi" target='_blank'> 
                    <img className='thumbnail'src={`${process.env.PUBLIC_URL}/images/github.png`} alt="Github"/>
                     </a>
                &nbsp;
                    <a href="https://www.linkedin.com/in/jack-mayer-se/" target='_blank'> 
                        <img className='thumbnail'src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="LinkedIn"/>
                    </a>
            &nbsp; &nbsp; 
                </span>
            </span>
            <div className='copyright'> © 2021 JACK MAYER </div>
            <br />
        </div>
    )
}
export default Footer