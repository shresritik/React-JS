import React, { useEffect } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import db from "./firebase";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const style = {
    paddingTop: "90px",
  };
  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    db.collection("contact")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your form has been submitted");
      })
      .catch((err) => alert(err.message));
    setName("");
    setEmail("");
    setMessage("");
    emailjs
      .sendForm(
        "service_v5v0s9k",
        "template_dzh89pe",
        e.target,
        "user_CiyOVh37lx0p8UlyUrB8p"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" data-aos="fade-top">
      <div className="contact" style={style}>
        <form className="form_info" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <h5>Email address</h5>
            </label>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="name">
              <h5>Name</h5>
            </label>
            <input
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              placeholder="Your name"
            />
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
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              name="message"
              placeholder="Your message"
            />
            <button
              style={{ backgroundColor: loader && "gray", outline: "none" }}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
