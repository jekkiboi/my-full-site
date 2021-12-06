
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

function CityCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <div className='item'>
          <Link to='/lizzie'>
            <img
              className="graphic"
              src={process.env.PUBLIC_URL + '/images/lizzie.png'}
              alt="First slide"
            />
          </Link>
        </div>
        <Carousel.Caption className='caption'>
          <div className='caption'>
            <Link to='/lizzie'>
            </Link>
          </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='item'>
          <Link to='/hscredit'>
            <img
              className="graphic"
              src={process.env.PUBLIC_URL + '/images/hscreditipad.png'}
              alt="Second slide"
            />
          </Link>
        </div>
        <Carousel.Caption>
          <div className='caption'>
            <Link to='/hscredit'>

            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <div className='item'>
          <Link to='/tamagotchi'>
            <img
              className="engayged"
              src={process.env.PUBLIC_URL + '/images/tamagotchi.png'}
              alt="Tamagotchi app"
            />
          </Link>
        </div>
        <Carousel.Caption>
          <br/>
          <br/>
          <div className='caption3'>
            <Link to='/tamagotchi'>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CityCarousel