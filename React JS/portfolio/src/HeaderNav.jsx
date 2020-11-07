import React, { useState, useEffect } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

function HeaderNav() {
  const [show, handleShow] = useState(false);
  const [view, handleView] = useState(false);
  console.log(window.scrollY);
  window.addEventListener("scroll", () => {
    if (window.scrollY == 0 || window.scrollY <= 50) {
      if (document.querySelector(".header_nav")) {
        document.querySelector(".header_nav").style.backgroundColor =
          "transparent";
      }
    } else {
      if (document.querySelector(".header_nav")) {
        document.querySelector(".header_nav").style.backgroundColor = "#1a1a1a";
      }
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50 && window.scrollY < 699) {
        handleShow(true);
      } else {
        if (document.querySelector(".header_nav")) {
          document.querySelector(".header_nav").style.backgroundColor =
            "#1A1A1A";
          handleShow(false);
        }
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 50 && window.scrollY < 699) {
          handleShow(true);
        } else {
          if (document.querySelector(".header_nav")) {
            document.querySelector(".header_nav").style.backgroundColor =
              "#1A1A1A";
            handleShow(false);
          }
        }
      });
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 700) {
        handleView(true);
      } else handleView(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 700) {
          handleView(true);
        } else handleView(false);
      });
    };
  }, []);
  return (
    <div
      className={`${show && `header_backgroundNone header_nav`}  ${
        view && `header_background header_nav`
      }`}
    >
      <div
        className={`nav_header mx-auto header_nav ${
          show && `header_backgroundNone header_nav`
        }  ${view && `header_background header_nav`}`}
      >
        <Navbar
          // fixed="top"
          className={`nav_header mx-auto  `}
          variant="dark"
          expand="lg"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="home" smooth={true} duation={500}>
                <Nav.Link href="#">Home</Nav.Link>
              </Link>
              <Link to="about" smooth={true} duation={500}>
                <Nav.Link href="#">About</Nav.Link>
              </Link>
              <Link to="resume" smooth={true} duation={500}>
                <Nav.Link href="#">Resume</Nav.Link>
              </Link>
              <Link to="work" smooth={true} duation={500}>
                <Nav.Link href="#">Work</Nav.Link>
              </Link>
              <Link to="contact" smooth={true} duation={500}>
                <Nav.Link href="#">Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default HeaderNav;
