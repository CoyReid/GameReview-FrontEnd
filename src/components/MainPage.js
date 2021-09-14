import { Grid } from '@material-ui/core'
import React from 'react'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import ReviewForm from './ReviewForm';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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

const MainPage = () => {
    const classes = useStyles();

    return (
        <div>
        <div className="main">
            <Grid container className={classes.root} spacing={10} justifyContent="space-around">
                <Grid item >
                    <Paper className={classes.paper}>Content</Paper>
                </Grid>
                <Grid item >
                    <Paper className={classes.paper}>Content</Paper>
                </Grid>
                <Grid item >
                    <Paper className={classes.paper}>Content</Paper>
                </Grid>
            </Grid>
        </div>
        <div>
            <ReviewForm/>
        </div>
        </div>
    )
}

export default MainPage
