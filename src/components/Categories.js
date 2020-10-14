import React, { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Categories = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, [])
  return (
    <Container className="Categories-Container">
    <div className="Categories-Text">
          <h1>
            Explore 3D Models <span>Categories</span>
          </h1>
          <p>
            Buy or free-download professional 3D models ready to be used in CG
            projects, film and video production, animation, visualizations,
            games, VR/AR, and others. Assets are available for download in many
            industry-accepted formats including MAX, OBJ, FBX, 3DS, STL, C4D,
            BLEND, MA, MB and other. If you are searching for high poly or
            real-time 3D assets, we have a leading digital art library for all
            your needs.
          </p>
        </div>
      <div data-aos="fade-up" className="Categories-Main">
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="100" data-aos-once="false" className="bg-dark text-white Categories-Card hvr-grow">
          <Card.Img
            className="Card-Image"
            src={require("../images/aircraft.jpg")}
            alt="Card image"
          />
          <Card.ImgOverlay className="Card-Overlay">
            <Card.Title className="Card-Overlay-Title">
              <span>Aircraft</span> 3D Models
            </Card.Title>
            <br />
            <Card.Text>
              This category covers 3D aircraft. CG airplanes will fit into
              simulations, visualizations, advertisements and videos.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Categories-Card hvr-grow">
          <Card.Img
            className="Card-Image"
            src={require("../images/animal.jpg")}
            alt="Card image"
          />
          <Card.ImgOverlay className="Card-Overlay">
            <Card.Title className="Card-Overlay-Title">
              <span>Animals</span> 3D Models
            </Card.Title>
            <br />
            <Card.Text>
              The collection of 3D fauna - cats, horses, bears, rhinos, eagles,
              lions and more - can be found here.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Categories-Card hvr-grow">
          <Card.Img
            className="Card-Image"
            src={require("../images/architecture.jpg")}
            alt="Card image"
          />
          <Card.ImgOverlay className="Card-Overlay">
            <Card.Title className="Card-Overlay-Title">
              <span>Architectural</span> 3D Models
            </Card.Title>
            <br />
            <Card.Text>
              Stair, fireplace, 3D models as well as decorations like frame,
              pillow, or lamp can be found in this extensive category.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Categories-Card hvr-grow">
          <Card.Img
            className="Card-Image"
            src={require("../images/exterior.jpg")}
            alt="Card image"
          />
          <Card.ImgOverlay className="Card-Overlay">
            <Card.Title className="Card-Overlay-Title">
              <span>Exterior</span> 3D Models
            </Card.Title>
            <br />
            <Card.Text>
              Browse architectural exteriors from facades, urban buildings to
              landscape objects, residential houses, industrial constructions,
              and full scale 3D city models.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Categories-Card hvr-grow">
          <Card.Img
            className="Card-Image"
            src={require("../images/interior.jpg")}
            alt="Card image"
          />
          <Card.ImgOverlay className="Card-Overlay">
            <Card.Title className="Card-Overlay-Title">
              <span>Interior</span> 3D Models
            </Card.Title>
            <br />
            <Card.Text>
              This category contains realistic 3D elements and details of
              architecture, construction and engineering interior design. You
              can use these 3D models for
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Categories-Card hvr-grow">
          <Card.Img
            className="Card-Image"
            src={require("../images/car.jpg")}
            alt="Card image"
          />
          <Card.ImgOverlay className="Card-Overlay">
            <Card.Title className="Card-Overlay-Title">
              <span>Car</span> 3D Models
            </Card.Title>
            <br />
            <Card.Text>
              Car category contains automobile 3D models, low-poly versions of
              which will be attractive to game designers, others - to film
              makers or advertisers.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Categories-Card hvr-grow">
          <Card.Img
            className="Card-Image"
            src={require("../images/charachter.jpg")}
            alt="Card image"
          />
          <Card.ImgOverlay className="Card-Overlay">
            <Card.Title className="Card-Overlay-Title">
              <span>Charachter</span> 3D Models
            </Card.Title>
            <br />
            <Card.Text>
              In this category you will find 3D models of human, people, sci-fi,
              clothing and other. From heart and hand to detailed realistic male
              or female models.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Categories-Card hvr-grow">
          <Card.Img
            className="Card-Image"
            src={require("../images/food.jpg")}
            alt="Card image"
          />
          <Card.ImgOverlay className="Card-Overlay">
            <Card.Title className="Card-Overlay-Title">
              <span>Food</span> 3D Models
            </Card.Title>
            <br />
            <Card.Text>
              Food helps to create realistic scenes of domestic life. 3D fruits,
              vegetables, beverages and meals are all here.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <div className="Button-Container">
          <button className="Categories-Button" eventKey="link-3">
            Browse all models
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Categories;
