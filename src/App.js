import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './widgets/header'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { History } from '@material-ui/icons';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, orange, cyan, grey } from '@material-ui/core/colors';

const notionsTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: orange[500]
    },
    label: blue[800],
    salutation: grey[700]
  }
})

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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    border: `2pt solid ${cyan[500]}`,
    flex: '0 0 50%',
    width: '400px',
    flexDirection: 'row',
    padding: '18px',
    marginBottom: '23px',
    color: grey[700],
    fontStyle: 'bold'
  },
  buttonIcon: {
    flexGrow: 0,
    flexBasis: '60px',
    color: cyan[500]
  }
}));



function App() {
  const classes = useStyles();
  const [location, setLocation] = React.useState('home')

  return (
    <>
      <MuiThemeProvider theme={notionsTheme}>
        <Header location={location} />
        <Router>
          <div className={classes.root}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/interventions">
                <Interventions />
              </Route>
            </Switch>
            <Fab color='primary' aria-label='Add' className={classes.floatingButton}>
              <AddIcon />
            </Fab>
          </div>
        </Router>
      </MuiThemeProvider>
    </>
  );
  function Home(props) {
    setLocation('home')
    return (
      <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, flexDirection: 'column', marginTop: '25%' }}>
        <Link to="/interventions">
          <Button className={classes.button}>
            <Badge
              badgeContent={4}
              color="secondary"
              style={{
                position: 'absolute',
                top: 0,
                right: 0
              }}
            />
            <ArrowForwardIcon className={classes.buttonIcon} />
            <div style={{ flexGrow: 1 }}>
              Interventions
            </div>
          </Button>

        </Link>
        <Button className={classes.button}>
          <History className={classes.buttonIcon} />
          <div style={{ flexGrow: 1 }}>
            Historique
          </div>

        </Button>
      </div>
    );
  }

  function Interventions(props) {
    setLocation('interventions')
    return (
      <div />
    );
  }
}



export default App;
