import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import HomePage from "./HomePage";
import Posts from "./Posts";
import Gallery from "./Gallery";
import ToDo from "./ToDo";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home/:id" exact component={HomePage} />
          <Route path="/:id/posts" exact component={Posts} />
          <Route path="/:id/gallery" exact component={Gallery} />
          <Route path="/:id/todo" exact component={ToDo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
