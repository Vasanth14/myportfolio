import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Dropdown,
  Image,
  Tab,
} from "react-bootstrap";
import ArrowRightIcon from "../app/assets/images/arrow-right.svg";
import logo from '../../src/app/assets/images/logo.png';
import { Link } from "react-router-dom";

function HomeHeader() {

  return (

    <>
      <Navbar collapseOnSelect expand="lg" className="headbg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Vasanth Chandrasekar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>

              
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#contact" className="contbtnlink headerbtn">
                <Button variant="outline-secondary" id="button-addon2">Contact <span className="ms-2 cntbtnbg"><Image src={ArrowRightIcon} /></span>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default HomeHeader;