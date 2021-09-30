import React from "react";
import { Grid } from "@material-ui/core";
import { SportCard } from "../../../../modules";
import useStyles from "./styles";

export default function SportsList({ handleVotes, sports }) {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container spacing={3}>
      {sports.map((sport) => (
        <Grid item key={sport.id} xs={12} sm={6} md={3}>
          <SportCard
            name={sport.name}
            image={sport.url}
            id={sport.id}
            votes={sport.votes}
            handleVotes={handleVotes}
          />
        </Grid>
      ))}
    </Grid>
  );
}
