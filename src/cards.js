import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

        <Button size="small" color="primary">
          Learn More 
        </Button>

      </CardActions>
    </Card>
  );
}