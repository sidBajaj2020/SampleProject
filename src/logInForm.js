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


  function FormDialog2(props) {

    const [open, setOpen] = React.useState(false); 
    const [username, setUsername] = React.useState("placeholder"); 
  
    function handleClickOpen(){
      setOpen(true);
    };
  
    function handleClose(){
      setOpen(false);
    };

    function handleLogIn(){
      setOpen(false);
      props.logInUser(username)
    };

    function onChange(event){
      const { target: { name, value } } = event;
      setUsername(value)
    }

      return (
        <div>
          <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
            Login
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
                onChange={onChange}
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
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button component={Link} to="/" onClick={handleLogIn} color="primary">
                Log In
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
  }

  const mapDispatchToProps = dispatch => {
    return {
      logInUser: (username) => dispatch({type: 'LOGIN_USER', userName: username})
    }
  }
  
  const connectedForm = connect(null, mapDispatchToProps) (FormDialog2); 
  export default connectedForm; 