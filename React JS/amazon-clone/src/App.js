import React, { useEffect } from "react";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //checks if the user is logged in and if it is then dispatch/ throw in data layer(reducer)
    auth.onAuthStateChanged(authUser => {
      console.log("This is user", authUser)
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })

      }
    })

  }, [])
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Payment />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
            <h5 className="footer">Developed by Ritik Krishna Shrestha</h5>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
