import React, { useEffect } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const style = {
    paddingTop: "90px",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="contact" data-aos="fade-top">
      <div className="contact" style={style}>
        <form>
          <div>
            <label htmlFor="email">
              <h5>Email address</h5>
            </label>
            <input type="email" required placeholder="Your email" />
          </div>
          <div>
            <label htmlFor="name">
              <h5>Name</h5>
            </label>
            <input type="text" required placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="message">
              <h5>Message</h5>
            </label>
            <textarea
              rows="10"
              cols="2"
              type="text"
              required
              placeholder="Your message"
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
