import React, { useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import AOS from "aos"
import "aos/dist/aos.css"

const Posts = () => {
      useEffect(() => {
    AOS.init({ duration: 1500 });
  }, [])
  return (
    <Container data-aos="fade" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false"  className="Posts-Container">
      <div className="Posts-Main">
        <Card data-aos="fade-right" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Posts-Card">
          <Card.ImgOverlay className="Posts-Card-Overlay">
            <Card.Img
              className="Posts-Card-Image"
              src={require("../images/projects.svg")}
              alt="Card image"
            />
            <Card.Title className="Posts-Card-Overlay-Title">
              FOUNDATION<span>3D</span> Projects
            </Card.Title>
            <br />
            <div className="Card-Text-Icon">
              <a href="">Browse 3D Projects</a>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white Posts-Card">
          <Card.ImgOverlay className="Posts-Card-Overlay">
            <Card.Img
              className="Posts-Card-Image"
              src={require("../images/designer.svg")}
              alt="Card image"
            />
            <Card.Title className="Posts-Card-Overlay-Title">
              Find Best 3D Designers
            </Card.Title>
            <br />
            <div className="Card-Text-Icon">
              <a href="">Browse 3D Designers List</a>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-left" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Posts-Card">
          <Card.ImgOverlay className="Posts-Card-Overlay">
            <Card.Img
              className="Posts-Card-Image"
              src={require("../images/e-commerce.svg")}
              alt="Card image"
            />
            <Card.Title className="Posts-Card-Overlay-Title">
              3D Visualization for e-Commerce
            </Card.Title>
            <br />
            <div className="Card-Text-Icon">
              <a href="">Learn More</a>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </Container>
  );
};

export default Posts;
