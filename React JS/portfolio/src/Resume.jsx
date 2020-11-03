import React from "react";
import Progress from "./Progress";
import "./Resume.css";
import png from "./img/pngegg.png";
import python from "./img/python.png";
import css from "./img/css.png";

function Resume() {
  return (
    <div id="resume" className="resume">
      <div className="resume_row">
        <h4>EDUCATION</h4>
        <div className="resume_right">
          <h4>Sagarmatha Engineering College</h4>
          <p> Bachelor in Electronics, Communication & Inforamtion</p>
        </div>
      </div>

      <div className="resume_row">
        <h4>Work</h4>
        <div className="resume_right">
          <h4>Sagarmatha Engineering College</h4>
          <p> Bachelor in Electronics, Communication & Inforamtion</p>
        </div>
      </div>

      <div className="resume_row skill">
        <h4>Skills</h4>

        <div className="resume_right">
          <h4>Sagarmatha Engineering College</h4>
          <p> Bachelor in Electronics, Communication & Inforamtion</p>
        </div>
      </div>
      <div className="progress_skills">
        <div className="resume_skill">
          <img src={python} alt="python" />
          {/* <h5>Python</h5> */}
          <Progress className="progress" done="65" />
        </div>
        <div className="resume_skill">
          <img
            alt="JS"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
          />
          {/* <h5>JavaScript</h5> */}
          <Progress className="progress" done="70" />
        </div>
        <div className="resume_skill">
          <img
            alt="C++"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"
            className="img_resize"
          />

          {/* <h5>C++</h5> */}
          <Progress className="progress" done="80" />
        </div>
        <div className="resume_skill">
          <img alt="C" src={png} className="img_increase img_resize" />

          {/* <h5>C</h5> */}
          <Progress className="progress" done="80" />
        </div>
        <div className="resume_skill">
          <img
            alt="html"
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png "
            // className="img_increase"
          />
          {/* <h5>Html</h5> */}
          <Progress className="progress" done="85" />
        </div>
        <div className="resume_skill">
          <img alt="CSS" src={css} />
          {/* <h5>CSS</h5> */}
          <Progress className="progress" done="75" />
        </div>
        <div className="resume_skill">
          {/* <div className="resume_skillLeft"> */}
          <img
            alt="Photoshop"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Photoshop_CC_icon.png/615px-Photoshop_CC_icon.png"
            className="photo_resize"
          />
          {/* <h5 className="mx-auto">Adobe Photoshop</h5> */}
          <Progress className="progress" done="70" />
          {/* </div> */}
        </div>
        <div className="resume_skill">
          <img
            alt="Illustrator"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Adobe_Illustrator_Icon_CS6.png"
          />
          {/* <h5>Adobe Illustrator</h5> */}
          <Progress className="progress" done="60" />
        </div>
      </div>
    </div>
  );
}

export default Resume;
