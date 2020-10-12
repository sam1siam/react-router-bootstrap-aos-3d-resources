import React, { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import { Container, Card } from "react-bootstrap";
import { GrThreeDEffects, GrThreeD } from "react-icons/gr";
import { FaDiceThree, FaPaintBrush } from "react-icons/fa";
import { CgTranscript } from "react-icons/cg";
import { MdTexture } from "react-icons/md";
import { SiBlender, SiCinema4D } from "react-icons/si";

const Marketplace = () => {
    useEffect(() => {
    AOS.init({ duration: 1500 });
  }, [])
  return (
    <Container className="Marketplace-Container">
    <div data-aos="fade" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="Marketplace-Text">
          <h1>
            3D Models <span>Marketplace</span>
          </h1>
        </div>
      <div data-aos="fade-up" className="Marketplace-Main">  
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Marketplace-Card">
          <Card.ImgOverlay className="Marketplace-Card-Overlay">
            <Card.Title className="Marketplace-Card-Overlay-Title">
              3D Printing Models
            </Card.Title>
            <br />
            <div className="Card-Text-Icon">
              <Card.Text>Find 3D print models for your 3D printer</Card.Text>
              <Card.Text>
                <GrThreeDEffects className="Card-Icon" />
              </Card.Text>
              <a href="">Browse 3D Print Models</a>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Marketplace-Card">
          <Card.ImgOverlay className="Marketplace-Card-Overlay">
            <Card.Title className="Marketplace-Card-Overlay-Title">
              PBR 3D Models
            </Card.Title>
            <br />
            <div className="Card-Text-Icon">
              <Card.Text>Physically Based Rendering 3D Models.</Card.Text>
              <Card.Text>
                <GrThreeD className="Card-Icon" />
              </Card.Text>
              <a href="">Browse PBR 3D Models</a>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Marketplace-Card">
          <Card.ImgOverlay className="Marketplace-Card-Overlay">
            <Card.Title className="Marketplace-Card-Overlay-Title">
              Low-poly 3D Models
            </Card.Title>
            <br />
            <div className="Card-Text-Icon">
              <Card.Text>
                Low-poly 3D models ready for video games, VR & AR real-time
                applications.
              </Card.Text>
              <Card.Text>
                <FaDiceThree className="Card-Icon" />
              </Card.Text>
              <a href="">Browse Low-poly 3D Models</a>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Marketplace-Card">
          <Card.ImgOverlay className="Marketplace-Card-Overlay">
            <Card.Title className="Marketplace-Card-Overlay-Title">
              Scripts & Apps
            </Card.Title>
            <br />
            <div className="Card-Text-Icon">
              <Card.Text>
                3D scripts and plugins to make your 3D modeling pipeline more
                efficient.
              </Card.Text>
              <Card.Text>
                <CgTranscript className="Card-Icon" />
              </Card.Text>
              <a href="">Browse All</a>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Marketplace-Card">
          <Card.ImgOverlay className="Marketplace-Card-Overlay">
            <Card.Title className="Marketplace-Card-Overlay-Title">
              Textures
            </Card.Title>
            <br />
            <div className="Card-Text-Icon">
              <Card.Text>
                Ready-to-use textures to save you some time preparing your 3D
                models.
              </Card.Text>
              <Card.Text>
                <MdTexture className="Card-Icon" />
              </Card.Text>
              <a href="">Browse Textures</a>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Marketplace-Card">
          <Card.ImgOverlay className="Marketplace-Card-Overlay">
            <Card.Title className="Marketplace-Card-Overlay-Title">
              Blender
            </Card.Title>
            <br />
            <div className="Card-Text-Icon">
              <Card.Text>
                Discover thousands of Blender 3D Models available in blend
                format.
              </Card.Text>
              <Card.Text>
                <SiBlender className="Card-Icon" />
              </Card.Text>
              <a href="">Browse Blender</a>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Marketplace-Card">
          <Card.ImgOverlay className="Marketplace-Card-Overlay">
            <Card.Title className="Marketplace-Card-Overlay-Title">
              Zbrush
            </Card.Title>
            <br />
            <div className="Card-Text-Icon">
              <Card.Text>
                Find ZTL file format 3D assets for your digital sculpting, 3D
                modeling, texturing and painting projects.
              </Card.Text>
              <Card.Text>
                <FaPaintBrush className="Card-Icon" />
              </Card.Text>
              <a href="">Browse Zbrush</a>
            </div>
          </Card.ImgOverlay>
        </Card>
        <Card data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" data-aos-offset="200" data-aos-once="false" className="bg-dark text-white Marketplace-Card">
          <Card.ImgOverlay className="Marketplace-Card-Overlay">
            <Card.Title className="Marketplace-Card-Overlay-Title">
              Cinema 4D
            </Card.Title>
            <br />
            <div className="Card-Text-Icon">
              <Card.Text>
                Uncover thousands of high quality Cinema 4D Models available in
                c4d file format.
              </Card.Text>
              <Card.Text>
                <SiCinema4D className="Card-Icon" />
              </Card.Text>
              <a href="">Browse Cinema 4D</a>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </Container>
  );
};

export default Marketplace;
