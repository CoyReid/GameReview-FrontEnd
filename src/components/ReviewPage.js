import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import ReviewForm from "./ReviewForm";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginTop: "100px",
    marginLeft: "30px",
    maxHeight: 470,
  },
  media: {
    height: 470,
    maxWidth: 500,
    minWidth: 350,
  },
  text: {
    color: "white",
  },
  loader: {
    margin: "200px auto 0 auto",
    display: "flex",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
}));

const ReviewPage = () => {
  const classes = useStyles();

  let { id } = useParams();
  let idNumber = { id }.id;

  const [game, setGames] = useState({});
  const [commentForm, setCommentForm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9292/games/${idNumber}`)
      .then((r) => r.json())
      .then(setGames);
  }, [idNumber, commentForm]);

  function handleChange(e) {
    setCommentForm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (commentForm !== "") {
      const newComment = {
        user_id: 1,
        review_id: 31,
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

  if (Object.keys(game).length !== 0) {
    return (
      <div className="review-page">
        <Card className={classes.root}>
          <CardMedia
            component="img"
            className={classes.media}
            image={game.image_url}
            title={game.image_url}
            alt="a game cover"
          ></CardMedia>
        </Card>
        {game.reviews.map((review) => (
          <div className="review" key={review.id}>
            <div className="review-header">
              <Avatar alt="Remy Sharp" src={review.user.profile_url} />
              <Typography className={classes.text} variant="h5">
                {review.user.name}
              </Typography>
            </div>
            <Typography className={classes.text} variant="body1">
              {review.content}
            </Typography>
            <List className={classes.root}>
              {review.comments.map((comment) => (
                <>
                  <ListItem alignItems="flex-start" key={comment.id}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={comment.user.profile_url} />
                    </ListItemAvatar>
                    <ListItemText
                      className={classes.text}
                      primary={comment.user.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            className={classes.text}
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {comment.content}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              ))}
            </List>
            <form className={classes.form} onSubmit={handleSubmit}>
              <Typography color="inherit" variant="h5">
                Add a Comment here
              </Typography>
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
          </div>
        ))}
        <div>
          <ReviewForm game={game}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    );
  }
};

export default ReviewPage;

// console.log(reviews.user.name)
// const fetchItem = async () => {
//     const fetchItem = await fetch(`http://localhost:9292/games/${idNumber}`)
//     const Item = await fetchItem.json();
//     setGames(Item)
// }
