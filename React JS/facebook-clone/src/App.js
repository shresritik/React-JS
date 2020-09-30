import React from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import "./App.css";
import Feed from "./Feed.jsx";
import Widget from "./Widget.jsx";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="header_body">
            <Header />
          </div>

          <div className="app_body">
            <div className="sidebar_body">
              <Sidebar />
            </div>
            <div className="feed_body">
              <Feed />
            </div>

            <div className="widget_body">
              <Widget />
            </div>
          </div>
          <h4 className="footer">Developed by Ritik Krishna Shrestha</h4>
        </>
      )}
    </div>
  );
}

export default App;
