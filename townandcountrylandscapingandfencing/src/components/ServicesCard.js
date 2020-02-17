import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TestImage from '../Photos/20181011-151418.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto"
  },
  media: {
    height: 140,
  },
});

export default function ServicesCard(props) {
  const classes = useStyles();

  const ServicesCard = (cardService) => {
    if (props.cardService === "Fencing") {
      let serviceImage = TestImage
    }
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={TestImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.cardService}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  return (
    <ServicesCard cardService={props.cardService}/>
  );
}
