import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card, CardMedia, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop: "100px",
      marginLeft: "30px"
    },
    media: {
      height: 400,
      maxWidth: 500
    },
  });


const ReviewPage = () => {
    const classes = useStyles();
    let {id} = useParams()
    let idNumber = ({id}.id)
    console.log(idNumber)

const [game, setGames] = useState({})
 console.log(`http://localhost:9292/games/${idNumber}`)
 console.log(game)
 
 useEffect(() => {
    fetch(`http://localhost:9292/games/${idNumber}`)
      .then((r) => r.json())
      .then(setGames);
  }, [idNumber]);
const review = game.reviews || [{"comments": [{"user": ["profile_url"]}], "user": [{"name" : ""}, {"profile_url" : ""}]} ]
const reviews = review[0]
const comment = reviews.comments[0]
console.log(reviews.user.name)
// const fetchItem = async () => {
//     const fetchItem = await fetch(`http://localhost:9292/games/${idNumber}`)
//     const Item = await fetchItem.json(); 
//     setGames(Item)    
// }   
    return (
        <div className="review-page">
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={game.image_url}>
                </CardMedia>
            </Card>
            <div className="review">
            <Avatar alt="Remy Sharp" src={reviews.user.profile_url} />
            <Typography variant="h5">{reviews.user.name}</Typography>
            <Typography variant="body1">{reviews.content}</Typography>
            </div>
            <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={comment.user.profile_url} />
        </ListItemAvatar>
        <ListItemText
          primary={comment.user.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {comment.content}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <Divider variant="inset" component="li" />
    </List>
        </div>
    )
}

export default ReviewPage
