import React from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import photo from "./img/ritik (1).jpg";
// import pdf from "./img/CV,Ritik.pdf";
import db from "./firebase";
import { useState } from "react";

function About() {
  const [prod, setProd] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    const getCollection = async () => {
      setIsLoading(true);

      const snapshot = await db.collection("CV").get();
      setProd((prev) => [...prev, snapshot.docs.map((doc) => doc.data())][0]);
      setIsLoading(false);
    };
    getCollection();
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
                  In my leisure time, I like to watch movies, listen to music,
                  and also play the guitar. But being a passionate developer, I
                  explore the technical fields and get acquainted with the new
                  technologies of the era. I like to get involved in graphic
                  design, web development, and AI projects.
                </p>
                <h2> Contact Details </h2>
                <p>
                  Location: Lalitpur, Nepal
                  <br />
                  E-mail:
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=shrestharitik@gmail.com"
                    target="_blank"
                    className="ml-1"
                    rel="noreferrer"
                  >
                    shrestharitik@gmail.com
                  </a>
                </p>
              </div>
              {/* {console.log(prod[0])} */}
              {!isLoading && prod[0] && (
                <a href={prod[0].url} target="_blank" rel="noreferrer">
                  <button type="button">Download my CV</button>
                </a>
              )}
              {isLoading && <h4>Loading...</h4>}
            </div>
          </div>

          <div className="about_contact"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
