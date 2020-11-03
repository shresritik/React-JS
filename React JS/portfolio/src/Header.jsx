import React, { useEffect, useState } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  Button,
  ButtonGroup,
  Dropdown,
  NavDropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";

function Header() {
  const [show, handleShow] = useState(false);
  const [view, handleView] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => window.removeEventListener("scroll");
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        handleShow(false);
        handleView(true);
      } else handleView(false);
    });
    // return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div id="home" className="header">
      <div
        className={`nav_header mx-auto ${show && `header_backgroundNone`} ${
          view && `header_background`
        }`}
      >
        {/* <div className="nav_header mx-auto"> */}
        <Navbar
          fixed="top"
          className={`nav_header mx-auto ${show && `header_backgroundNone`} ${
            view && `header_background`
          }`}
          variant="dark"
          expand="lg"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>

              {/* <Nav.Link id="nav_work" href="#works" id="basic-nav-dropdown">
                Work
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle
                    as={NavLink}
                    split
                    variant="success"
                    id="dropdown-split-basic"
                  />
                  <Dropdown.Menu id="nav_drop">
                    <NavDropdown.Item href="#/action-1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#/action-2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#/action-3">
                      Something else
                    </NavDropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link> */}

              {/* <NavDropdown title="Works" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Websites</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Graphic Designs
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown> */}
              <Nav.Link href="#works">Work</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="header_info">
        <h1>
          <strong>Hi, I'm Ritik Krishna Shrestha. </strong>
        </h1>
        <h4>I am a Web Developer and Graphics Designer.</h4>
        <p>
          I'm Nepalese citizen who love to create websites and innvotaive
          graphic designs.
        </p>
      </div>
    </div>
  );
}

export default Header;
