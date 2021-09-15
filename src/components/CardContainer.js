import React from "react";
import Cards from "./Card";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
  },
  paper: {
    height: 250,
    width: 250,
    padding: theme.spacing(2),
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const CardContainter = ({ games }) => {
  const classes = useStyles();

  const cardsToShow = games.map((game) => <Cards game={game} key={game.id} />);

  return (
    <Grid
      container
      className={classes.root}
      spacing={10}
      justifyContent="space-around"
    >
      {cardsToShow}
    </Grid>
  );
};

export default CardContainter;
