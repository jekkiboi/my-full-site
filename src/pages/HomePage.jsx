import { Link } from 'react-router-dom'
import {Fade} from 'react-reveal'
import CityCarousel from '../partials/CityCarousel'

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
        <CityCarousel />
            <br />
            <br /> 

        
        </div>
        </Fade>
    </div>
    )
}
export default Home