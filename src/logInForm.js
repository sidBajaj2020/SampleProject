import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components'; 
import {Link} from "react-router-dom"

import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

class FormDialog extends React.Component {

    constructor(props){
      super(props); 
      this.state = {open: false, username: undefined}; 
      console.log("Hello World- Form")
      console.log(this.props)

      this.setOpen = this.setOpen.bind(this); 
      this.handleClickOpen = this.handleClickOpen.bind(this); 
      this.handleClose = this.handleClose.bind(this); 
      this.handleChange = this.onChange.bind(this); 
      this.handleLogIn = this.handleLogIn.bind(this); 
    }

    setOpen(b){
      this.setState({open: b})
    }
  
    handleClickOpen(){
      this.setOpen(true);
    };
  
    handleClose(){
      this.setOpen(false);
    };

    handleLogIn(){
      this.setOpen(false);
      this.props.logInUser(this.state.username)
    };

    onChange(event){
      const { target: { name, value } } = event;
      this.setState({username: value})
    }

    render(){
      return (
        <div>
          <Button variant="outlined" color="inherit" onClick={this.handleClickOpen}>
            Login
          </Button>
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
             <Grid container spacing={0} direction="row" justify="centre" alignItems="centre">
                  <Grid item xs={6}>
                       <DialogTitle id="form-dialog-title"> <em> Log in </em></DialogTitle>
                  </Grid>
              </Grid> 
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Username"
                type="email"
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button component={Link} to="/" onClick={this.handleLogIn} color="primary">
                Log In
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      logInUser: (username) => dispatch({type: 'LOGIN_USER', userName: username})
    }
  }
  
  const connectedModal = connect(null, mapDispatchToProps) (FormDialog); 
  export default connectedModal; 