
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
// import { Switch, Route } from 'react-router-dom'

function CityCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <div className='item'>
          <Link to='/lizzie'>
            <img
              className="graphic"
              src={process.env.PUBLIC_URL + '/images/LizzieGraphics.png'}
              alt="First slide"
            />
          </Link>
        </div>
        <Carousel.Caption className='caption'>
          <div className='caption'>
            <Link to='/lizzie'>
              Lizzie Social Media App
            </Link>
          </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='item'>
          <Link to='/claude9'>
            <img
              className="graphic"
              src={process.env.PUBLIC_URL + '/images/C9Graphics.png'}
              alt="Second slide"
            />
          </Link>
        </div>
        <Carousel.Caption>
          <div className='caption'>
            <Link to='/claude9'>
              Claude 9 Salon
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <div className='item'>
          <Link to='/engayged'>
            <img
              className="engayged"
              src={process.env.PUBLIC_URL + '/images/EngaygedGraphics.png'}
              alt="EnGayged Wedding Planner"
            />
          </Link>
        </div>
        <Carousel.Caption>
          <br/>
          <br/>
          <div className='caption3'>
            <Link to='/engayged'>
              EnGayged Wedding Planner
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CityCarousel