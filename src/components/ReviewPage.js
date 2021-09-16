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
import CommentForm from "./CommentForm";
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
  gameText: {
    margin: "auto",
    color: "white",
    marginLeft: "150px"
  }
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

  if (Object.keys(game).length !== 0) {
    return (
      <div className="review-page">
        <div className="game-details">
        <Card className={classes.root}>
          <CardMedia
            component="img"
            className={classes.media}
            image={game.image_url}
            title={game.image_url}
            alt="a game cover"
          ></CardMedia>
        </Card>
        <Typography variant="h4" className={classes.gameText}>{game.title}<br></br>{game.platform}<br></br>{game.publisher}<br></br>{game.avg}</Typography>
        </div>
        {game.reviews.map((review) => (
          <div className="review">
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
                  <ListItem alignItems="flex-start">
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
            <CommentForm review={review} commentForm={commentForm} setCommentForm={setCommentForm}/>
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
