import React from 'react';
import Main from './Main'; 
import Form from './logInForm'; 
import SideBar from './Sidebar'
import Title from './title'; 

import { fade, makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LinkUI from '@material-ui/core/Link';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import './App.css';
import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

const SearchBar = styled.div`
  padding: 1em  
`


function App() {
  const classes = useStyles();

  return (
    <Router>
        <div>
        <AppBar color="primary" position="static">
          <Toolbar>
          <SideBar />
          <Grid container direction="row" justify="center">
            <Grid item>
            <Typography variant="h6" className={classes.title}>
              <i component={Link} to="/">Play Day</i>
            </Typography>
            </Grid>
          </Grid>
          <SearchBar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>  
          </SearchBar>
            <Form/> 
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/singlePlayDate">
              <Title text="Single Play Date"/>
          </Route>
          <Route path="/groupPlayDate">
              <Title text="Group Play Date"/>
          </Route>
          <Route path="/supervisors">
              <Title text="Supervisors Available"/>
          </Route>
          <Route path = "/settings">
               <Title text="Settings Available"/>
          </Route>
          <Route path = "">
              <Main />
          </Route>
        </Switch>
        
    </div>
    </Router>
  );
}

export default App;
