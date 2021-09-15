import React from 'react'
import TextField from "@material-ui/core/TextField"
import Typography from '@material-ui/core/Typography'
import { makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '600px',
      },
    },
  }));
  

const ReviewForm = () => {
    const classes = useStyles();
    return (
        <div className="review">
            <form className={classes.root}>
                <Typography color="inherit" variant="h3">Create Review Here</Typography>
                <TextField  multiline type="text" placeholder="Review" rows={13} cols={40} variant="outlined"></TextField>
            </form>
        </div>
    )
}

export default ReviewForm
