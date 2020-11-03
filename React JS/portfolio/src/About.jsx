import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="about">
      <div className="about_me">
        <h2>About Me</h2>
        <div className="about_resume">
          <p>
            Use this bio section as your way of describing yourself and saying
            what you do, what technologies you like to use or feel most
            comfortable with, describing your personality, or whatever else you
            feel like throwing in.
          </p>
          <button type="button">Download my CV</button>
        </div>
      </div>

      <div className="about_contact">
        <div className="about_contactMe">
          <h2> Contact Details </h2>
          <p>
            Tim Baker (Your Street) (Your City) (Your State), (Your Zip/Postal
            Code) 555-555-5555 youremailhere@gmail.com{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
