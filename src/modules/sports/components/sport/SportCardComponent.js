import React from "react";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import useStyles from "./styles";

export default function SportCardComponent({
  name,
  image,
  id,
  votes,
  handleCount,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={6}>
      <div className={classes.media}>
        <img src={image} alt="img" className={classes.image} />
      </div>
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
          variant="contained"
          className={classes.voteButton}
          fullWidth
          onClick={() => handleCount(id)}
        >
          VOTE
        </Button>
      </CardActions>
    </Card>
  );
}
