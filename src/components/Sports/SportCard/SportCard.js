import React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions, 
  CardMedia
} from "@material-ui/core";

import useStyles from "./styles";

export default function Sport({ name, image, id, votes, handleVotes }) {
  const classes = useStyles();

  const handleCount = (sportId) => handleVotes(sportId);

  return (
    <>
      <Card className={classes.card} elevation={6}>
        {/*<div className={classes.media}>
            <img src={image} alt="img" className={classes.image} />
            </div>*/}
        <CardMedia
          className={classes.media}
          image={image}
          component="image"
        />
        <CardContent>
          <div className={classes.details}>
            <Typography variant="h4" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body1" style={{ marginTop: "15px" }}>{`${
              votes + (votes === 1 ? " vote" : " votes")
            }`}</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button
            size="large"
            color="primary"
            variant="contained"
            fullWidth
            onClick={() => handleCount(id)}
          >
            VOTE
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
