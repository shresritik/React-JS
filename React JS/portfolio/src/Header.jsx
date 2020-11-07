import React, { useEffect, useState } from "react";
import "./Header.css";
import HeaderNav from "./HeaderNav";
import Typical from "react-typical";

function Header() {
  return (
    <div id="home" className="header">
      <HeaderNav />

      <div className="header_info">
        <h1>
          <strong>Hi, I'm Ritik Krishna Shrestha. </strong>
        </h1>
        <h4>
          I am a {""}{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["Web Developer.", 1000, "Graphics Designer.", 1000]}
          />
        </h4>
        <p>
          I'm a Nepalese citizen who love to create websites and innvate graphic
          designs.
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/ritik.shrestha.73/" target="_blank">
            {" "}
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/shresritik/" target="_blank">
            {" "}
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/shresritik/" target="_blank">
            {" "}
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ritik-shrestha-b17a4616a/"
            target="_blank"
          >
            {" "}
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
