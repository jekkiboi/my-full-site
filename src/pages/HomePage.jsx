import { Alert, Linking } from 'react-native';
import { Link } from 'react-router-dom'
import {Fade} from 'react-reveal'
import Header from '../components/Header';

function Home() {


    return (
        <div>
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
            <h4 className="tagline">Designer/Frontend Engineer</h4>
            </Fade>
            </div>
            </Fade>
            <br />
            <br /> 
            <br />
            <br />
            <Fade bottom>
            <Link to='/lizzie'>
                    <img className='graphic'src={`${process.env.PUBLIC_URL}/images/LizzieGraphics.png`} alt="Enter"/>
            </Link>
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
            <Fade bottom>
            <Link to='/claude9'>
                    <img className='graphic'src={`${process.env.PUBLIC_URL}/images/C9Graphics.png`} alt="Enter"/>
            </Link>
            </Fade>
            <br />
            <br />
            <br /> 
            <br />
            <br />
            <br />
            <Fade bottom>
            <Link to='/engayged'>
                    <img className='engayged'src={`${process.env.PUBLIC_URL}/images/EngaygedGraphics.png`} alt="Enter"/>
            </Link>
            </Fade>
            <br />
            <br /> 
            <br />
            <br />
            <br />
            <br /> 
        
        </div>
        </Fade>
    </div>
    )
}
export default Home