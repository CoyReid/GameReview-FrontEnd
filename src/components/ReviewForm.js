import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "600px",
    },
    display: "flex",
    flexDirection: "column"
  },
  btn: {
    maxWidth: "15px"
  }
}));

const ReviewForm = ({game}) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    score: "",
    content: ""
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (formData.score !== "" && formData.content !== "") {
      const newReview = {
        ...formData,
        user_id: 1,
        game_id: 1
      }
      fetch("http://localhost:9292/reviews", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newReview)
      })
      setFormData({
        ...formData,
        score: "",
        content: ""
      })
    }
    else {
      alert("Please fill out the Review Form!")
    }
  }

  return (
    <div className="review">
      <form className={classes.root} onSubmit={handleSubmit}>
        <Typography color="inherit" variant="h3">
          Create Review Here
        </Typography>
        <TextField
          id="filled-full-width"
          label="Review Text"
          style={{ margin: 8 }}
          placeholder="Write your review here..."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={formData.content}
          onChange={handleChange}
          type="text"
          name="content"
          rows={7}
          cols={7}
          multiline
        />
        <TextField
          label="Score 1-10"
          id="filled-margin-none"
          placeholder="Write your Game score here..."
          variant="filled"
          value={formData.score}
          onChange={handleChange}
          type="text"
          name="score"
        />
        <Button id="formBtn" variant="outlined" type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ReviewForm;
