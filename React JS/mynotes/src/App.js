import "./App.css";
import NotesListPages from "./pages/NotesListPages";
import NotesPage from "./pages/NotePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route path="/" exact component={NotesListPages} />
          <Route path="/notes/:id" component={NotesPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
