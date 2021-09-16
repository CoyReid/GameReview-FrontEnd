import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function CommentForm({ review, commentForm, setCommentForm }) {
  
  const classes = useStyles();
  
  function handleChange(e) {
    setCommentForm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (commentForm !== "") {
      const newComment = {
        user_id: 1,
        review_id: review.id,
        content: commentForm,
      };
      fetch("http://localhost:9292/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });
      setCommentForm("");
    } else {
      alert("Please fill out the Review Form!");
    }
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        id="filled-full-width"
        label="Comment Text"
        style={{ margin: 8 }}
        placeholder="Write your comment here..."
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        value={commentForm}
        onChange={handleChange}
        type="text"
      />
      <Button id="formBtn" variant="outlined" type="submit">
        Submit
      </Button>
    </form>
  );
}
