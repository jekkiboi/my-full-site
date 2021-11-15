import {Fade} from 'react-reveal'

function Lizzie(){
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
                    <h2 className="tools">React / 0Authentication / Node.js</h2>
                    <br />
                    <h1 className='wayfarertitle'>Lizzie</h1>
                   
                    <p className='wayfarerbody'>
                        For my final project I decided to create a social media app for reptile lovers (don't ask me why I have no idea). In the app I utilize third party authentication, React Hooks, Social Media components and an image uploader. Loosely based off of reddit's chatroom format, user data is stored in a simple profile and focuses on the sharing of information in a cascading list. Lizzie is on track to be mobile friendly. This is by far my most exciting project and I cannot wait to deploy it.
                    </p>
                    <br />
                    <div class='links'>
                        &nbsp; 
                        <a class="link" target="_blank" href="https://lizzieclient.herokuapp.com/">View live</a>
                        <span>  / </span>
                        <a class="link" target="_blank" href="https://github.com/jekkiboi/LizzieClient">View Code</a>
                    </div>
                    </Fade>
                </div>
                <Fade right>
                <img className='lizziephone' src={process.env.PUBLIC_URL + '/images/lizziephone.png'} alt=""/>
                </Fade>
            </header>

            <br />
            <Fade bottom>
            <img className='lizzielaptop' src={process.env.PUBLIC_URL + '/images/lizzielaptop.png'} alt=""/>
            </Fade>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </body>
    )
}
    
export default Lizzie