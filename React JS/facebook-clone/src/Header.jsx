import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontIcon from "@material-ui/icons/Storefront";
import FlagIcon from "@material-ui/icons/Flag";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import AddIcon from "@material-ui/icons/Add";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const userName = document.getElementsByClassName("userName");

  var array = user.displayName.split(" ")[0];
  userName.innerText = array;
  // console.log("array", array);
  // console.log("username", userName);

  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search facebook" />
        </div>
      </div>
      <div className="header_center">
        <div className="header_options header_options--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_options">
          <FlagIcon fontSize="large" />
        </div>

        <div className="header_options">
          <OndemandVideoIcon fontSize="large" />
        </div>

        <div className="header_options">
          <GroupIcon fontSize="large" />
        </div>

        <div className="header_options">
          <StorefrontIcon fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} alt="img" />
          <h4 className="userName">{array}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
