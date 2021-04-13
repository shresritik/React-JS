import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCard from "./TinderCard";
import SwipeButton from "./SwipeButton";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backbutton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backbutton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCard />
            <SwipeButton />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
