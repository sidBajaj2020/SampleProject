import React from 'react';
import Main from './Main'; 
import Form from './logInForm'; 
import SideBar from './Sidebar'
import Title from './title'; 
import SubSection from './subSectionsMain'

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

import ReduxThunk from 'redux-thunk'
import { connect } from "react-redux";

const axios = require('axios');

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
  padding: 2em  
`

const Greeting = styled.p`
  padding: 1em
`

const StyledLink = styled(Link)`
    text-decoration: none;

    color: white; 

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const Div = styled.div`
  text-align:center
`

const Quote = styled.h1`
    padding-top: 4em
    display:inline-block
`

function App(props) {
  const classes = useStyles();

  console.log("Hello World")
  console.log(props)

  const loggedIn = !props.loggedIn ? <Form /> : <Greeting>Hey {props.userName}</Greeting>

  return (
    <Router>
        <div>
        <AppBar color="primary" position="static">
          <Toolbar>
          <SideBar />
          <Grid container direction="row" justify="center">
            <Grid item>
            <Typography component={StyledLink} to="/" variant="h6" className={classes.title}>
              <i>Play Day</i>
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
            {loggedIn}
            {props.loggedIn ? <Button onClick={props.logOutUser} color="inherit">Logout</Button> : null}
          </Toolbar>
        </AppBar>

        <Switch>
          <Route path="/singlePlayDate">
              <Title text="Single Play Date"/>
              <SubSection text="singlePlayDateProfiles" />
          </Route>
          <Route path="/groupPlayDate">
              <Title text="Group Play Date"/>
              <SubSection text="groupPlayDateProfiles" />
          </Route>
          <Route path="/supervisors">
              <Title text="Supervisors Available"/>
              <SubSection text="supervisorsAvailable" />
          </Route>
          <Route path = "/settings">
               <Title text="Settings Available"/>
               <Div>
                <Quote>{props.kanyeQuote}</Quote>
               </Div>
               <Div>
                  <Button onClick={props.genQuote}> Generate New Kanye West Quote using Saga </Button>
                  <Button onClick={props.genQuoteThunk}> Generate New Kanye West Quote using Thunk </Button>
               </Div>
          </Route>
          <Route path = "">
              <Main />
          </Route>
        </Switch>
        
    </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return state; 
}

function quoteActionCreator(){

  return function (dispatch) {

    var quote = "ACTION DISPATCHED"
    axios.get("https://api.kanye.rest")
    .then(function(res){
      console.log("RESPONSE")
      quote = res.data.quote

      dispatch({
        type: "GENERATE_NEW_QUOTE", 
        quote
      })
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOutUser: () => dispatch({type: "LOGOUT_USER"}), 
    genQuote: () => dispatch({type: "GEN_NEW_QUOTE"}), 
    genQuoteThunk: () => dispatch(quoteActionCreator())
  }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps) (App); 
export default connectedApp;
