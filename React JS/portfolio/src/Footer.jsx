import React, { useEffect } from "react";
import "./Footer.css";
import { animateScroll as scroll } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="footer" data-aos="fade-top">
      <i
        className="fas fa-arrow-circle-up"
        onClick={() => scroll.scrollToTop()}
      ></i>
      <div className="icon">
        <a
          href="https://www.facebook.com/ritik.shrestha.73/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/shresritik/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/shresritik/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ritik-shrestha-35043627b/"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <h6>Developed by Ritik Krishna Shrestha</h6>
      <h6> Copyright &copy; 2023</h6>
    </div>
  );
}

export default Footer;
