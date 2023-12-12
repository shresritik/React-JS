import React from "react";
import "./Header.css";
import HeaderNav from "./HeaderNav";
import Typical from "react-typical";
// import videos from "./img/stars2.mp4";
// import post from "./header-background.jpg";

function Header() {
  return (
    <div id="home" className="header">
      <HeaderNav />
      {/* <div className="video_background">
        <div className="video_wrap">
          <div id="video">
            <video autoPlay loop muted playsInline>
              <source src={videos} type="video/mp4" />
            </video>
          </div>
        </div>
      </div> */}
      <div className="video-background">
        <div className="video-wrap">
          <div id="video">
            <video
              preload="auto"
              poster={
                "https://res.cloudinary.com/dzni0ie3s/image/upload/v1702387659/header-background_yneima.jpg"
              }
              autoPlay
              loop
              muted
              playsInline
              id="bdvid"
            >
              <source
                src="https://res.cloudinary.com/dzni0ie3s/video/upload/v1702387367/stars2_hbtqp6.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="header_overlay">
        <div className="header_info">
          <h1>
            <strong>Hi, I'm Ritik Krishna Shrestha. </strong>
          </h1>
          <h4>
            I am a {""}{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={["Web Developer.", 1000, "Graphic Designer.", 1000]}
            />
          </h4>
          <p>
            I'm a passionate developer from Nepal who can create awesome
            websites and innovative graphic designs.
          </p>
          <div className="icons">
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
        </div>
      </div>
    </div>
  );
}

export default Header;
