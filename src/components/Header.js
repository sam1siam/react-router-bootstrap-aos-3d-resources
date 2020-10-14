import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Logo from "../images/logo.png";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom"
import CgDarkMode from "../App.js"

const Header = () => {
 
  return (
    <Container id="navbar" className="Header-Container" fluid>
      <Navbar collapseOnSelect expand="lg" className="Navbar-Main Sticky"> 
        <Navbar.Brand className="Navbar-Brand">
        <Link className="Navbar-Brand" style={{ textDecoration: "none" }} to="/">
          <img
            alt="logo"
            src={Logo}
            width="45"
            height="45"
            className="d-inline-block align-center"
          />{" "}
          FOUNDATION<span>3D</span>
          </Link>
        </Navbar.Brand>
      <Navbar.Toggle className="Nav-Bar-Toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="Nav-Menu mr-auto" variant="pills" defaultActiveKey="link-1">
          <Nav.Item className="Nav-Link Nav-Link-Main" Nav-Link-Main>
            <Nav.Link className="Nav-Link Nav-Link-Main" eventKey="link-1">
            <Link  className="Nav-Link" style={{ textDecoration: "none" }} to="/">
              Home
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="Nav-Link" eventKey="link-2">
            <Link  className="Nav-Link" style={{ textDecoration: "none" }} to="/">
              Assets
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="Nav-Link" eventKey="link-3">
            <Link  className="Nav-Link" style={{ textDecoration: "none" }} to="/demo">
              Demo
            </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="Nav-Link" eventKey="link-4">
            <Link  className="Nav-Link" style={{ textDecoration: "none" }} to="/signup">
              Sign-Up
            </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="Search-Bar-Icons" variant="pills" defaultActiveKey="link-1">
          <div className="Icon-Div">
            <input type="text" placeholder="Search 3D Models"></input>
            <Link  className="Nav-Link" style={{ textDecoration: "none" }} to="/signup">
            <BiLogIn className="Icon-Login" />
            </Link>
        {/* {    <CgDarkMode/>} */}
          </div>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
     )}


export default Header;
