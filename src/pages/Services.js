import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Outro from '../components/Outro.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {SERVICES} from '../shared/services';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles((theme) => ({
  pageMarginTop: {
    marginTop: '140px',
    [theme.breakpoints.down('md')]: {
      marginTop: '75px'
    }
  },
}))

export default function Services() {
  const classes = useStyles();
    return (
    <>
      <Navbar page={'Services'}/>
      <Box className={classes.pageMarginTop}></Box>

      {/*EVERY ITEM IN THE GRID BELOW IS A CARD DETAILING A SERVICE THAT IS PROVIDED*/}
      <Grid container direction="row" justify="space-around" >
        {
          SERVICES.map((item) => {
            const pathString = String('/portfolio#') + String(item.id);
            return (
              <Grid item xs={6} md={4} style={{"padding":"2%"}}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      style={{"height":"200px"}}
                      image={item.servicePagePhoto}
                      title={item.service}
                    />
                    <CardContent>
                      <Typography variant="h5" align="center" component="h2" color="Primary">
                        {item.service}
                      </Typography>
                      <Typography variant="body2" align="center" color="Primary" component="p">
                        {item.ServicePageText}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={pathString} style={{"textDecoration": "none", 'margin':'auto'}}>
                        <Button size="small">
                          <Typography variant="body2" color="textSecondary">Portfolio</Typography>
                        </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>

            )
          })
        }
      </Grid>

      {/*OUTRO*/}
      <Outro/>
    </>
  )
}
