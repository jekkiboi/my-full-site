import {Fade} from 'react-reveal'

function Tamagotchi(){
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
                    <h2 className="tools">JavaScript / HTML / CSS</h2>
                    <br />
                    <h1 className='wayfarertitle'>Tamagotchi Game</h1>
                   
                    <p className='wayfarerbody'>
                        Tamagotchi game rendered with splash keyframe CSS and JavaScript conditional statements. 
                        Implemented an input field to name pet Tamagotchi.
                    </p>
                    <br />
                    <div class='links'>
                        <a class="link" target="_blank" href="https://jekkiboi.github.io/tamagotchi/">View Live</a>
                        &nbsp; &nbsp; 
                        <a class="link" target="_blank" href="https://github.com/jekkiboi/tamagotchi">View Code</a>
                    </div>
                    </Fade>
                </div>
                <Fade right>
                <img className='wayfarerlaptop' src={process.env.PUBLIC_URL + '/images/laptopengayged.png'} alt=""/>
                </Fade>
            </header>

            <br />
            <br />
            <br />
        </body>
    )
}
    
export default Tamagotchi