import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 2
  },
  paper: {
    height: 250,
    width: 250,
    padding: theme.spacing(2),
  },
  media: {
    paddingTop: '90%', // 16:9
    minWidth: "500px",
    minHeight: "120px"
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Cards = ({ game }) => {
  const classes = useStyles();

  return (
    <Grid item>
       <Card className={classes.root}>
           <CardHeader
             action={
               <IconButton aria-label="settings">
               </IconButton>
             }
             title={game.title}
             subheader={game.genre}
           />
           <Link to={`/game/${game.id}`}>
           <CardMedia
             className={classes.media}
             image={game.image_url}
             title="gif"
           />
           </Link>
           <CardContent>
             <Typography className="cardDetails" variant="body2" color="textSecondary" component="p">
               platform:{game.platform}
               <br></br>
               publisher:{game.publisher}
               <br></br>
               Rating: {game.reviews[0].score}/10
             </Typography>
           </CardContent>
           </Card>
    </Grid>
  );
};

export default Cards;
