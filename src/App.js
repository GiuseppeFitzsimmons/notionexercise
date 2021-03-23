import React from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
    fontStyle:'bold'
  }
}));



function App() {
  const classes = useStyles();
  const [location, setLocation] = React.useState('')
  console.log("location", location)
  return (
    <>
      <Header location={location} />
      <Router>
        <div className={classes.root}>
      <AppBar position="absolute" color='transparent' style={{position:'absolute',borderRadius:'4px', left:'5%', top:'5%',width:'90%'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            from router config
          </Typography>
          <Typography variant="h7" className={classes.salutation} style={{fontStyle:'bold'}}>
            from router config
          </Typography>
          
          <ExitToApp color="primary" />
        </Toolbar>
      </AppBar>
      <Fab size="small" color="primary" aria-label="add" className={classes.floatingButton}>
        <AddIcon />
      </Fab>
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
