import {Fade} from 'react-reveal'
import CityCarousel from '../partials/CityCarousel'
import { Link } from 'react-router-dom'
import About from './About'

function Home() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br /> 
            <br />
            <br /> 
            <br />
            <br />
  
        <Fade>
        <div className='home-index' style={{ }}>
            <Fade left>
            <div className='inline-text'>
                <h1 className='jack'>Jackie Mayer</h1>
                <Fade left>
            <h4 className="tagline">Software Engineer/Frontend Developer</h4>
            </Fade>
            </div>
        </Fade>

        <br />
        <br />
        <br />
          <Fade left>        
          <Link to='/hscredit'>
            <img
              className="lizziehome1"
              src={process.env.PUBLIC_URL + '/images/hscredit.png'}
              alt="Second slide"
            />
          </Link>
        </Fade>


        <br />
        <br />
        <br />
        <Fade right>
        <Link to='/lizzie'>
            <img
              className="lizziehome"
              src={process.env.PUBLIC_URL + '/images/lizzie.png'}
              alt="First slide"
            />
          </Link>
          </Fade>

          <br />
        <br />
        <br />
          <Link to='/tamagotchi'>
            <img
              className="lizziehome"
              src={process.env.PUBLIC_URL + '/images/tamagotchi.png'}
              alt="Tamagotchi app"
            />
          </Link>

       
            <br />
            <br /> 
            <br />
            <br />
            <br />
        
        <About />
        </div>
        </Fade>
        <Fade up>
          <div className="skillssection">
          <br />
        <br />
        <br />
        <h2 className="skillstools">My Top Skills </h2>
        <br />
        <img
              className="skills"
              src={process.env.PUBLIC_URL + '/images/skillslogossmall.png'}
              alt="skills logos"
            />
            </div>
        </Fade>
        <br />
        <br />
        <br /> 
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> 
        <br />

    </div>
    )
}
export default Home