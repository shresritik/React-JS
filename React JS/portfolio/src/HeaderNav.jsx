import React, { useState, useEffect } from "react";
import "./Header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

function HeaderNav() {
  const [show, handleShow] = useState(false);
  const [view, handleView] = useState(false);

  var btns = document.getElementsByClassName("nav-link");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");

      this.className += " active";
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0 || window.scrollY <= 50) {
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
          fixed="top"
          className={`nav_header mx-auto  `}
          variant="dark"
          expand="lg"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link
                to="home"
                className={`nav-link`}
                // onClick={handleClick}
                offset={0}
                spy={true}
                activeClass="active"
                smooth={true}
                duation={500}
              >
                Home
              </Link>
              <Link
                to="about"
                className={`nav-link `}
                smooth={true}
                spy={true}
                offset={0}
                activeClass="active"
                // onClick={handleClick}
                duation={500}
              >
                About
              </Link>
              <Link
                to="resume"
                className={`nav-link  `}
                smooth={true}
                offset={0}
                spy={true}
                activeClass="active"
                // onClick={handleClick}
                duation={500}
              >
                Resume
              </Link>
              <Link
                to="work"
                className={`nav-link `}
                smooth={true}
                offset={0}
                spy={true}
                activeClass="active"
                // onClick={handleClick}
                duation={500}
              >
                Work
              </Link>
              <Link
                to="contact"
                className={`nav-link  `}
                smooth={true}
                offset={0}
                spy={true}
                activeClass="active"
                // onClick={handleClick}
                duation={500}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default HeaderNav;
