import { React } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './widgets/header'

function App() {
  return (
    <>
      <Header />
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/interventions">
              <Interventions />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <li>
        <Link to="/interventions">Interventions</Link>
      </li>
    </div>
  );
}

function Interventions() {
  return (
    <div>
      <h2>Interventions</h2>
    </div>
  );
}

export default App;
