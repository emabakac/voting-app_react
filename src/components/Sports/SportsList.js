import React from "react";
import SportCard from "./SportCard/SportCard";
import { Grid } from "@material-ui/core";
import { sportsData } from "../../data/SportsData";

import useStyles from "./styles";

export default function Sports({ handleVotes }) {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container spacing={3}>
      {sportsData.map((sport) => (
        <Grid item key={sport.id} xs={12} sm={2}>
          <SportCard
            name={sport.name}
            image={sport.url}
            key={sport.id}
            id={sport.id}
            votes={sport.votes}
            handleVotes={handleVotes}
          />
        </Grid>
      ))}
    </Grid>
  );
}
