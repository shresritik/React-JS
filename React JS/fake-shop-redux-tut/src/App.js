import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productid" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
