import React from 'react'
import { Grid } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
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
const Card = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={10} justifyContent="space-around">
            <Grid item >
                    <Paper className={classes.paper}>Content</Paper>
            </Grid>
        </Grid>
    )
}

export default Card
