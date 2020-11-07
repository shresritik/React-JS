import React from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
          <h2>About Me</h2>
          <div className="about_resume">
            <p>
              In my free time, I like to watch movies, listen to music and play
              guitar. But whenever I am using Internet, I watch web development
              or graphic designs tutorials and inspirational portfolio which
              encourages me to develop one.
            </p>
            <button type="button">Download my CV</button>
          </div>
        </div>

        <div className="about_contact">
          <div className="about_contactMe">
            <h2> Contact Details </h2>
            <p>
              Location: Lalitpur, Nepal
              <br />
              Email Id: shrestharitik@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
