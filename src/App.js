import React from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './widgets/header'



function App() {
  const [location, setLocation] = React.useState('')
  console.log("location", location)
  return (
    <>
      <Header location={location} />
      <Router>
        <div>
          <ul>
            <button onClick={() => { setLocation('home') }}>
              <Link to="/" state={'home'}>Home Page</Link>
            </button>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home state={'home'} />
            </Route>
            <Route path="/interventions">
              <Interventions />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
  function Home(props) {
    console.log('home props', props)
    return (
      <div>
        <h2>Home</h2>
        <button onClick={() => { setLocation('interventions') }}>
          <Link to="/interventions">Interventions</Link>
        </button>
      </div>
    );
  }

  function Interventions(props) {
    console.log('interventions props', props)
    return (
      <div />
    );
  }
}



export default App;
