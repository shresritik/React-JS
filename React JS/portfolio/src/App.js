import "./App.css";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Work from "./Work";
import { Route, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      {/* <Route path="/work"> */}
      <Work />
      <Contact />

      {/* </Route> */}
    </div>
  );
}

export default App;
