import React from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import photo from "./img/ritik (1).jpg";
import pdf from "./img/RITIK-CV.pdf";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const style = {
    paddingTop: "74px",
    paddingBottom: "74px",
  };
  return (
    <div id="about">
      <div className="about" style={style} data-aos="fade-down">
        <div className="about_me">
          <div className="about_section">
            <div className="about_resume">
              <div className="about_photo">
                <img alt="" src={photo} />
              </div>
              <div className="about_header">
                <h2>About Me</h2>

                <p>
                  In my free time, I like to watch movies, listen to music and
                  play guitar. But whenever I am using Internet, I watch web
                  development or graphic designs tutorials and inspirational
                  portfolio which encourages me to develop one.
                </p>
                <h2> Contact Details </h2>
                <p>
                  Location: Lalitpur, Nepal
                  <br />
                  E-mail: shrestharitik@gmail.com
                </p>
              </div>
              <a href={pdf} target="_blank" rel="noreferrer">
                <button type="button">Download my CV</button>
              </a>
            </div>
          </div>

          <div className="about_contact"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
