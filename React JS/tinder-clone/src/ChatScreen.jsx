import Avatar from "@material-ui/core/Avatar";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Mark Zukerberg",
      profilepic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      message: "Whats up!",
    },
    {
      name: "Mark Zukerberg",
      profilepic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/800px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
      message: "How you doing!",
    },

    { message: "I am fine!" },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput(" ");
  };
  return (
    <div className="chatScreen">
      <h3 className="chatScreen_timestamp">
        You matched with Mark on 2021/4/13
      </h3>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              key={message.message.length}
              className="chatScreen_image"
              src={message.profilepic}
              alt={message.name}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type your message"
          className="chatScreen_inputField"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="chatScreen_button"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
