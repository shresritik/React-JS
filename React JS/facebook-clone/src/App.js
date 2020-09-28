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
          <Header />

          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
