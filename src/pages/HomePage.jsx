import { Alert, Linking } from 'react-native';
import { Link } from 'react-router-dom'
import {Fade} from 'react-reveal'
import Header from '../components/Header';

function Home() {


    return (
        <div>
        <Fade>
        <div className='home-index' style={{
            background: "white",
            backgroundPosition: "bottom",
            backgroundSize: "fill"
        }}>
            <Header />
            <br />
            <span className='inlineText'>
                <h1 className='jack'>Jack Mayer</h1>
            </span>
            <h4 className="tagline">Designer/Frontend Engineer</h4>
            <Link to='/lizzie'>
                    <img className=''src={`${process.env.PUBLIC_URL}/images/LizzieGraphics.png`} alt="Enter"/>
            </Link>
            <br />
            <br />
            <br /> 
            <br />
            <br />
            <br />
            <Link to='/claude9'>
                    <img className=''src={`${process.env.PUBLIC_URL}/images/C9Graphics.png`} alt="Enter"/>
            </Link>
    
            
            <Link to='/engayged'>
                    <img className='engayed'src={`${process.env.PUBLIC_URL}/images/EngaygedGraphics.png`} alt="Enter"/>
            </Link>
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