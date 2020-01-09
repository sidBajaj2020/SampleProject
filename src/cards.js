import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false); 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>

        <CardMedia
          className={classes.media}
          image={props.url}
          title={props.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="p" component="p">
                <b>Hobbies: </b> {props.hobbies}
          </Typography>
        </CardContent>

      </CardActionArea>
      <CardActions>

        <Button size="small" color="primary">
            Contact
        </Button>

        <Button size="small" color="primary" onClick={handleClickOpen}>
          Learn More 
        </Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title"> <em> More About Me </em></DialogTitle>
            <DialogContent>
                Bacon ipsum dolor amet cupim chuck tri-tip pork alcatra filet mignon venison. 
                Spare ribs leberkas capicola pork chop landjaeger, 
                tail ground round tri-tip alcatra beef ribs bacon cow turkey. 
                Short ribs beef turducken, pork chop tri-tip capicola pork belly meatloaf chicken 
                leberkas chislic porchetta. Shank shoulder pork loin jerky swine
            </DialogContent>
        </Dialog>

      </CardActions>
    </Card>
  );
}