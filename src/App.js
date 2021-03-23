import React from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Header from './widgets/header'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ExitToApp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  floatingButton: {
    position: 'absolute',
    bottom: theme.spacing(4),
    right: theme.spacing(4)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3,
    color: 'blue'
  },
  salutation: {
    flexGrow: 1,
    color: 'black',
    fontStyle: 'bold'
  }
}));



function App() {
  const classes = useStyles();
  const [location, setLocation] = React.useState('home')
  console.log("location", location)
  return (
    <>
      <Header location={location} />
      <Router>
        <div className={classes.root}>
          <ul>
            <Button onClick={() => { setLocation('home') }}>
              Home Page
              <Redirect to="/" />
            </Button>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home state={'home'} />
            </Route>
            <Route path="/interventions">
              <Interventions />
              <Button onClick={() => { setLocation('interventions') }}>
                <Link to="/interventions"> INTERVENTIONS </Link>
              </Button>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
  function Home(props) {
    return (
      <div>
        <h2>Home</h2>
        <Button onClick={() => { setLocation('interventions') }}>
          <Redirect to="/interventions" />
        </Button>
      </div>
    );
  }

  function Interventions(props) {
    return (
      <div />
    );
  }
}



export default App;
