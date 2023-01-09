import React from 'react'
import Slider1 from "../HomeSlider/images/10001.webp";
import Slider2 from "../HomeSlider/images/10006.webp";
import Slider3 from "../HomeSlider/images/10002.webp";
import Slider4 from "../HomeSlider/images/10005.webp";
import Carousel from "react-bootstrap/Carousel";

const HomeSlider = () => {
  return (
   
      <Carousel className='home__image'>
        <Carousel.Item>
          <img className="d-flex w-100" 
          src={Slider1} 
          alt="Firist slider" />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-flex w-100" 
          src={Slider2} 
          alt="Second slider" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-flex w-100" 
          src={Slider3} 
          alt="Second slider" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-flex w-100"
           src={Slider4} 
           alt="Third slide" />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

  )
}
export default HomeSlider