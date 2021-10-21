import {Fade} from 'react-reveal'

function EnGayged(){
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
                    <h2 className="tools">Express / EJS / Bootstrap</h2>
                    <br />
                    <h1 className='wayfarertitle'>EnGayged</h1>
                   
                    <p className='wayfarerbody'>
                        For our second project, a cohort member and I teamed up to create a bay area resourced wedding planning guide for LGBT folks. We created scema, editable text areas and implemented bootstrap APIs such as a datepicker and calender.
                    </p>
                    <br />
                    <div class='links'>
                        <a class="link" target="_blank" href="https://weddapp.herokuapp.com/">View Live</a>
                        &nbsp; &nbsp; 
                        <a class="link" target="_blank" href="https://github.com/erininabox/weddingapp">View Code</a>
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
    
export default EnGayged