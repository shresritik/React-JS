import React, { useEffect } from "react";
import Progress from "./Progress";
import "./Resume.css";
import png from "./img/pngegg.png";
import python from "./img/python.png";
import css from "./img/css.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Resume() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="resume" className="resume" data-aos="fade-top ">
      <div className="resume_row" data-aos="flip-left">
        <h4>EDUCATION</h4>
        <div className="resume_right">
          <h4>Sagarmatha Engineering College (2020)</h4>
          <p> Bachelors in Electronics, Communication & Information</p>
          <h4>Prasadi Academy Higher Secondary School (2016 - 2018)</h4>
          <p> 10+2 Science Faculty</p>
          <h4>Graded English Medium School (2006 - 2016)</h4>
          <p> Primary-Secondary Level</p>
        </div>
      </div>

      <div className="resume_row" data-aos="flip-left">
        <h4>Work</h4>
        <div className="resume_right">
          <h4>ChildSafeNet (2018)</h4>
          <p> Graphics Designer</p>
          <h4>Unicampus Consultancy (2017 - 2018)</h4>
          <p> Junior Assistant Graphics Designer</p>
        </div>
      </div>

      <div className="resume_row skill" data-aos="flip-left">
        <h4>Skills</h4>

        <div className="resume_right">
          <h4>Self-taught Programmer & Graphics Designer</h4>
          <p>
            I owned my skills from online tutorials like Udemy, Coursera and
            YouTube
          </p>
        </div>
      </div>
      <div className="progress_skills" data-aos="fade-up">
        <div className="resume_skill">
          <div className="resume_skillLeft">
            <img src={python} alt="python" />
            <h5>Python</h5>
          </div>
          <div className="resume_progress">
            <Progress className="progress" done="65" />
          </div>
        </div>
        <div className="resume_skill">
          <div className="resume_skillLeft">
            <img
              src="https://www.djangoproject.com/m/img/logos/django-logo-negative.png"
              alt="python"
              // style={{ marginLeft: "20px" }}
              className="django"
            />
            <h5>Django</h5>
          </div>
          <div className="resume_progress">
            <Progress className="progress" done="60" />
          </div>
        </div>
        <div className="resume_skill">
          <div className="resume_skillLeft">
            <img
              alt="JS"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
            />
            <h5>JavaScript</h5>
          </div>
          <div className="resume_progress">
            <Progress className="progress" done="70" />
          </div>
        </div>
        <div className="resume_skill">
          <div className="resume_skillLeft">
            <img
              alt="JS"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png"
            />
            <h5>React JS</h5>
          </div>
          <div className="resume_progress">
            <Progress className="progress" done="65" />
          </div>
        </div>
        <div className="resume_skill">
          <div className="resume_skillLeft">
            <img
              alt="C++"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"
              className="img_resize"
            />

            <h5>C++</h5>
          </div>
          <div className="resume_progress">
            <Progress className="progress" done="80" />
          </div>
        </div>
        <div className="resume_skill">
          <div className="resume_skillLeft">
            <img alt="C" src={png} className="img_increase img_resize" />

            <h5>C</h5>
          </div>
          <div className="resume_progress">
            <Progress className="progress" done="80" />
          </div>
        </div>
        <div className="resume_skill">
          <div className="resume_skillLeft">
            <img
              alt="html"
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png "
              // className="img_increase"
            />
            <h5>Html</h5>
          </div>
          <div className="resume_progress">
            <Progress className="progress" done="85" />
          </div>
        </div>
        <div className="resume_skill">
          <div className="resume_skillLeft">
            <img alt="CSS" src={css} />
            <h5>CSS</h5>
          </div>
          <div className="resume_progress">
            <Progress className="progress" done="75" />
          </div>
        </div>
        <div className="resume_skill">
          <div className="resume_skillLeft">
            <img
              alt="Photoshop"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Photoshop_CC_icon.png/615px-Photoshop_CC_icon.png"
              className="photo_resize"
            />
            <h5>Adobe Photoshop</h5>
          </div>
          <div className="resume_progress">
            <Progress className="progress" done="75" />
          </div>
        </div>
        <div className="resume_skill">
          <div className="resume_skillLeft">
            <img
              alt="Illustrator"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Adobe_Illustrator_Icon_CS6.png"
            />
            <h5>Adobe Illustrator</h5>
          </div>
          <div className="resume_progress">
            <Progress className="progress" done="65" />
          </div>
        </div>
        <div className="resume_skill">
          <div className="resume_skillLeft">
            <img
              alt="Illustrator"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Adobe_Premiere_Pro_Logo.svg/512px-Adobe_Premiere_Pro_Logo.svg.png"
              // className="photo_resize"
            />
            <h5>Adobe Premiere Pro</h5>
          </div>
          <div className="resume_progress">
            <Progress className="progress" done="50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
