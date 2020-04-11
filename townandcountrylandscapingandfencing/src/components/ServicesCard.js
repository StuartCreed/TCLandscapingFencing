import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ColourTheme from '../ColourTheme';
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto"
  },
  media: {
    height: 140,
  },
  TextColour: {
    color: ColourTheme.FirstColour,
  }
});

export default function ServicesCard(props) {
  const classes = useStyles();

  const ServicesCardComponent = (item) => {
    if (props.mobile === 'false') {
      const pathString = String('/portfolio#') + String(item.item.id);
      return (
        <>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.item.servicePagePhoto}
              title={item.item.service}
            />
            <CardContent>
              <Typography variant="h5" component="h2" className={classes.TextColour}>
                {item.item.service}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.item.ServicePageText}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={pathString} style={{"textDecoration": "none", 'margin':'auto'}}>
                <Button size="small" color="primary" style={{'margin':'auto'}}>
                  <span className={classes.TextColour}>Portfolio</span>
                </Button>
            </Link>
          </CardActions>
        </Card>
        </>
      )
    }

    if (props.mobile === 'true') {
      const pathStringMob = String('/portfolio#') + String(item.item.id) + String('mob');
      return (
        <>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.item.servicePagePhoto}
              title={item.item.service}
            />
            <CardContent>
              <Typography variant="h5" component="h2" className={classes.TextColour}>
                {item.item.service}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.item.ServicePageText}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={pathStringMob} style={{"textDecoration": "none", 'margin':'auto'}}>
                <Button size="small" color="primary" style={{'margin':'auto'}}>
                  <span className={classes.TextColour}>Portfolio</span>
                </Button>
            </Link>
          </CardActions>
        </Card>
        </>
      )
    }
  }

  return (
    <>
    <ServicesCardComponent item={props.cardService}/>
    </>
  );
}
