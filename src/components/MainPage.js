import { useEffect, useState } from "react";
import React from "react";
import CardContainer from "./CardContainer";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  head: {
    background: "black",
    borderRadius: "10px",
  },
  row: {
    fontSize: "large",
    color: "#949494de"
  },
  tableName:{
    marginLeft: "700px",
    color: "white",
    textShadow: "3px 5px 2px #474747"
  },
  feautre: {
    marginLeft: "700px",
    marginTop: "150px",
    color: "white",
    textShadow: "3px 5px 2px #474747"
  },
  rows: {
    color: "white"

  }
}));



const MainPage = () => {
  const [games, setGames] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch("http://localhost:9292/games/sort_by_rating")
      .then((r) => r.json())
      .then(setGames);
  }, []);

  const topThree = games.slice(3, 7);
  const topTen = games.slice(0,9)

  return (
    <div>
      <Typography className={classes.feautre} variant="h3">Featured Games</Typography>
      <div className="main">
        <CardContainer games={topThree} />
      </div>
      <Typography className={classes.tableName} variant="h3">Top Ten Games</Typography>
      <div className="table">
      <TableContainer className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow >
            <TableCell className={classes.row}>Game Title</TableCell>
            <TableCell className={classes.row} align="right">Platform</TableCell>
            <TableCell className={classes.row} align="right">Publisher</TableCell>
            <TableCell className={classes.row} align="right">Genre</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {topTen.map((game) => (
            <TableRow key={game.title}>
              <TableCell className={classes.rows} component="th" scope="row">
                {game.title}
              </TableCell>
              <TableCell className={classes.rows} align="right">{game.platform}</TableCell>
              <TableCell className={classes.rows} align="right">{game.publisher}</TableCell>
              <TableCell  className={classes.rows} align="right">{game.genre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default MainPage;
