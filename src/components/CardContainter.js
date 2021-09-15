import React from 'react'
import Card from './Card'
import { Grid } from '@material-ui/core'
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


const CardContainter = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.root} spacing={10} justifyContent="space-around">
                <Card/>
            </Grid>
        </div>
    )
}

export default CardContainter
