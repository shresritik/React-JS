import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Work from "./Work";
// import { Route, Router } from "react-router-dom";
import Footer from "./Footer";
import "@fortawesome/fontawesome-free/css/all.css";
import Website from "./Website";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GraphicsPage from "./GraphicsPage";
import Login from "./Admin/Login";
import Admin from "./Admin/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/website">
          <Website />
        </Route>
        <Route path="/graphics">
          <GraphicsPage />
        </Route>
        <Route path="/admin/user">
          <Admin />
        </Route>
        <Route exact path="/admin">
          <Login />
        </Route>
        <Switch>
          <Route exact path="/">
            <Header />
            <About />
            <Resume />
            <Work />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
