import React, { useState } from "react";
import SideBar from "./SideBar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { useStateValue } from "./StateProvider";

import Login from "./Login";

function App() {
  // const [{}, dispatch] = useStateValue();

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <React.Fragment>
          <div className="app_body">
            <Router>
              <SideBar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route path="/">{/* <Chat /> */}</Route>
              </Switch>
            </Router>
          </div>

          <h4 className="footer">Developed by Ritik Krishna Shrestha</h4>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
