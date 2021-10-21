import {Fade} from 'react-reveal'

function OfTheEarth(){
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
                    <h2 className="tools">Creative Cloud / Illustrator </h2>
                    <br />
                    <h1 className='wayfarertitle'>Of The Earth</h1>
                    <br />
                    <p className='wayfarerbody'>
                    Suzanne Cornell is a gardening expert and compost enthusaist located in Bloomington New York. She commissioned me to design her graphics for a soil company titled 'Of the Earth'. I created textured, scaleable designs that can be utilized on multiple surfaces and formats. Suzanne is on track to begin her small business in 2022.
                    </p>
                    <br />
                    </Fade>
                </div>
                <Fade right>
                <img className='wayfarerlaptop' src={process.env.PUBLIC_URL + '/images/otestyle.png'} alt=""/>
                </Fade>
            </header>

            <br />
            <Fade bottom>
            <img className='wayfarerlayout' src={process.env.PUBLIC_URL + '/images/oftheearthbanner.png'} alt=""/>
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
    
export default OfTheEarth