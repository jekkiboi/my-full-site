import { Alert, Linking } from 'react-native';
import { Link } from 'react-router-dom'
import {Fade} from 'react-reveal'
import Header from '../components/Header';

function Home() {


    return (
        <div>
        <Fade>
        <div className='home-index' style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/left.png')`,
            backgroundPosition: "bottom",
            backgroundSize: "fill"
        }}>
            <Header />
            <br />
            <span className='inlineText'>
                <h1 className='jack'>I'm Jack</h1>
            </span>
            <div className='inlineLinks'>
            &nbsp; &nbsp;
                <Link to='/Work'>
                    <img className='thumb'src={`${process.env.PUBLIC_URL}/images/enter.png`} alt="Enter"/>
                </Link>
        &nbsp; &nbsp; &nbsp; 
                <a href="https://github.com/jekkiboi" target='_blank'> 
                    <img className='thumbnail'src={`${process.env.PUBLIC_URL}/images/github.png`} alt="Github"/>
                </a>
            &nbsp; &nbsp; 
                <a href="https://www.linkedin.com/in/jack-mayer-se/" target='_blank'> 
                    <img className='thumbnail'src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="LinkedIn"/>
                </a>
            &nbsp; &nbsp; 
            </div>
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
        </Fade>
    </div>
    )
}
export default Home