import "./App.css";
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Routes</h1>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
        <Switch>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
