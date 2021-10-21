import { Alert, Linking } from 'react-native';
import { Link, } from 'react-router-dom'
import {Fade} from 'react-reveal'


function Home() {

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url)
        if (isSupported) {
            await Linking.openUrl(url)
        } else {
            Alert.alert(`Dont know how to open this url: ${url}`)
        }
    }



    return (
        <div>
        <Fade>
        <div className='home-index' style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/left.png')`,
            backgroundPosition: "bottom",
            backgroundSize: "stretch"
        }}>
            
            <div className='format'>
                

                <span className='inlineText'>
                <h1 className='jack'>I'm Jack</h1>
                </span>
                <div className='inlineLinks'>
                <Fade right>
                    <span className='links'> 
                        {/* <h1>Code</h1> */}
                        {/* <h1>Design</h1> */}
                        
                          
                        {/* <Link to='/Design'>
                        <img className='letter'src={`${process.env.PUBLIC_URL}/images/D.png`}/>
                        </Link> */}
                        &nbsp; &nbsp; 
                        <Link to='/Work'>
                        <img className='thumbnail'src={`${process.env.PUBLIC_URL}/images/enter.png`}/>
                        </Link>
                        &nbsp; &nbsp; 
                        <a href="https://github.com/jekkiboi" target='_blank'> 
                        <img className='thumbnail'src={`${process.env.PUBLIC_URL}/images/github.png`}/>
                        </a>
                        &nbsp; &nbsp; 
                        <a href="https://www.linkedin.com/in/jack-mayer-se/" target='_blank'> 
                            <img className='thumbnail'src={`${process.env.PUBLIC_URL}/images/linkedin.png`}/>
                        </a>
                        &nbsp; &nbsp; 
                    </span>
                </Fade>
                </div>
            </div>

        </div>
        </Fade>
        </div>
    )
}
export default Home