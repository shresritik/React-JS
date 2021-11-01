import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://pngimg.com/uploads/netflix/netflix_PNG15.png"
        alt="Netflix"
        className="nav_logo"
      />

      <img
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix"
        className="nav_avatar"
      />
    </div>
  );
}

export default Navbar;
