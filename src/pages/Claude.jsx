import {Fade} from 'react-reveal'

function Claude(){
    return(
        <body className="projectPage">
          <br />
          <br />
          <br />
          <br />
          <br />
            <header className='inlinewayfarer'>
                <div>
                    <Fade left>
                    <h2 className="tools">Adobe Creative Cloud / Branding / Content Creation </h2>
                    <br />
                    <h1 className='wayfarertitle'>Claude 9</h1>
                    <br />
                    <p className='wayfarerbody'>
                        Claude 9 is an up and coming hair salon located in the greater Houston area. I had the opportunity to create graphics for the company as well as content creation and social media consulting. I explored new ways of incorporating realism and gradiation/layering techniques utilizing Google font's uniquely whimsical Pacifico family.  
                    </p>
                    <br />
                    <div class='links'>
                        &nbsp; 
                        <a href="https://www.facebook.com/claude9salon" target='_blank'> 
                            <img className='lank'src={`${process.env.PUBLIC_URL}/images/facebook.png`}/>
                        </a>
                        &nbsp; &nbsp; 
                        <a href="https://www.instagram.com/claude9salon/?hl=en" target='_blank'> 
                            <img className='lank'src={`${process.env.PUBLIC_URL}/images/instagram.png`}/>
                        </a>
                    </div>
                    </Fade>
                </div>
                <Fade right>
                <img className='wayfarerlaptop' src={process.env.PUBLIC_URL + '/images/c9squareorange.png'} alt=""/>
                </Fade>
            </header>

            <br />
            <Fade bottom>
            <img className='wayfarerlayout' src={process.env.PUBLIC_URL + '/images/sky.png'} alt=""/>
            </Fade>
            <br />
            <Fade bottom>
            <img className='wayfarerlayout' src={process.env.PUBLIC_URL + '/images/claudebanner.png'} alt=""/>
            </Fade>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </body>
    )
}
    
export default Claude