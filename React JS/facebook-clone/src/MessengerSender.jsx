import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import "./MessengerSender.css";
import db from "./firebase";
import firebase from "firebase";

import { useStateValue } from "./StateProvider";
function MessengerSender() {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [URL, setURL] = useState("");
  let handleChange = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profileImage: user.photoURL,
      username: user.displayName,
      image: URL,
    });
    setInput("");
    setURL("");
  };
  return (
    <div className="messengerSender">
      <div className="messenger_top">
        <Avatar src={user.photoURL} alt="img" />
        <form>
          <input
            type="text"
            className="messenger_input"
            placeholder={`What's on your mind, ${user.displayName}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL (Optional)"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
          />
          <button type="submit" onClick={handleChange}>
            Post
          </button>
        </form>
      </div>
      <div className="messenger_bottom">
        <div className="messenger_options">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messenger_options">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messenger_options">
          <EmojiEmotionsIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessengerSender;
