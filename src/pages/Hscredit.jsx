import {Fade} from 'react-reveal'

function Hscredit(){
    return(
        <body className="projectPage">
          <br />
          <br />
          <br />
            <header className='inlinewayfarer'>
                <div>
                    <Fade left>
                    <h2 className="tools">React / PreSQL </h2>
                    <h1 className='wayfarertitle'>HS-Credit</h1>
                    <p className='wayfarerbody'>
                        HS.Credit is a app working to make higher education more accessible for young adults in at risk communities. 
                        Students upload their homework in a form of a paper, video or podcast for their instructors to grade.
                        The app uses NFTs to reward students for completing their homework. The hope is to one day abolish standardized testing, make the app fully paid for by the school, 
                        and incentivize students to learn from their communities and interact with their learning more authentically.
                    </p>
                    <br />

                    
                    <div class='links'>
                        <a class="link" target="_blank" href="https://github.com/hs-credit-dev/frontend">View Code &nbsp; &nbsp;/</a>
                        &nbsp; &nbsp; 
                        <a class="link" target="_blank" href="https://www.figma.com/file/5jYXuLg6KU8PjFE07ZJFwM/HSC---APP?node-id=0%3A1">View Figma</a>
                    </div>
                    </Fade>
                </div>

            </header>

            <br />
            <Fade bottom>
            <img className='hscreditlayout' src={process.env.PUBLIC_URL + '/images/graphicsipad.png'} alt=""/>
            <img className='hscreditlayout1' src={process.env.PUBLIC_URL + '/images/userstory.png'} alt=""/>
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
    
export default Hscredit