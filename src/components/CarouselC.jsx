import Carousel from 'react-bootstrap/Carousel';
import './CarouselC.css'

function CarouselC() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img src='/notebook.webp' alt="" />
        <Carousel.Caption>
          <h3>Notebook</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/el2.webp' alt="" />
        <Carousel.Caption>
          <h3>Celulares</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/el3.webp' alt="" />
        <Carousel.Caption>
          <h3>Smartwatch</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselC;