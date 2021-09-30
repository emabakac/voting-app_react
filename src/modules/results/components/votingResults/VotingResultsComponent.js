import React from "react";
import { Button, Grid } from "@material-ui/core";
import { VotingResult, PieChart } from "../../../../modules";
import useStyles from "./styles";

export default function VotingResultsComponent({
  allVotes,
  sports,
  sum,
  sumVotes,
  showPieChart,
  hidePieChart,
  isPieChartShown,
  resultsReset,
  reset,
}) {
  const classes = useStyles();

  return (
    sports && (
      <div className={classes.resultsContainer}>
        {isPieChartShown ? (
          <>
            <PieChart allVotes={allVotes} sports={sports} />
            <div className={classes.button}>
              <Button color="primary" variant="outlined" onClick={hidePieChart}>
                HIDE PIE CHART
              </Button>
            </div>
          </>
        ) : (
          <>
            <Grid container className={classes.container}>
              {sports.map((sport) => (
                <Grid item key={sport.id}>
                  <VotingResult
                    name={sport.name}
                    votes={sport.votes}
                    sumVotes={sumVotes}
                    resultsReset={resultsReset}
                  />
                </Grid>
              ))}
            </Grid>
            <div className={classes.button}>
              <Button
                color="primary"
                variant="outlined"
                onClick={showPieChart}
                disabled={sum > 0 ? false : true}
              >
                SHOW PIE CHART
              </Button>
            </div>
          </>
        )}
        <div className={classes.button}>
          <Button
            color="primary"
            variant="outlined"
            onClick={reset}
            disabled={sum > 0 ? false : true}
          >
            RESET
          </Button>
        </div>
      </div>
    )
  );
}
