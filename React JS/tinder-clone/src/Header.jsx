import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import tinder from "./tinder.png";

function Header({ backbutton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backbutton ? (
        <IconButton onClick={() => history.replace(backbutton)}>
          <ArrowBackIosIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>
      )}
      <Link to="/">
        <img
          src={tinder}
          // src="https://toppng.com/uploads/preview/tinder-logo-transparent-tinder-logo-11563243301zivc1sx84c.png"
          // src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
          alt="tinder logo"
          className="header_logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header_icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
