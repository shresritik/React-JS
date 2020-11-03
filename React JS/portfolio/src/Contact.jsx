import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <form>
        <div>
          <label htmlFor="email">
            <h5>Email address</h5>
          </label>
          <input type="email" placeholder="Your email" />
        </div>
        <div>
          <label htmlFor="name">
            <h5>Name</h5>
          </label>
          <input type="text" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="message">
            <h5>Message</h5>
          </label>
          <textarea rows="10" cols="2" type="text" placeholder="Your message" />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
