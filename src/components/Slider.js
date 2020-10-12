import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel className="Carousel" >
      <Carousel.Item className="Carousel-Item">
        <img
          className="d-block w-100"
          src={require("../images/slide1.jpg")}
          alt="First slide"
        />
        <div className="Carousel-Text">
          <h3>LARGEST 3D ASSET LIBRARY ONLINE</h3>
          <p>
            Choose from over +300,000 3D assets professionally rednered <br />
            <span>30 Categories | Unlimted Downloads | One-Fee.</span>
          </p>
        </div>
      </Carousel.Item>
      <Carousel.Item className="Carousel-Item">
        <img
          className="d-block w-100"
          src={require("../images/slide2.jpg")}
          alt="Third slide"
        />
        <div className="Carousel-Text2">
          <h3>CUSTOMIZE EVERYTHING</h3>
          <p>
            All assets are customizable, you can change <br /> anything from
            material to shadows!
          </p>
          <button className="Carousel-Nav-Link" eventKey="link-3">
            Demo
          </button>
        </div>
      </Carousel.Item>
    </Carousel>
         )}

export default Slider;
