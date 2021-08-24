import React from "react";
import SingleSportVotingResult from "./Result/SingleSportVotingResult";
import { Grid } from "@material-ui/core";
import { sportsData } from "../../data/SportsData";
import useStyles from "./styles";

export default function Results({ sumVotes }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.container}>
        {sportsData.map((sport) => (
          <Grid item key={sport.id}>
            <SingleSportVotingResult
              key={sport.id}
              name={sport.name}
              votes={sport.votes}
              sumVotes={sumVotes}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
