import React from "react";
import { LinearProgress, Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function VotingResultComponent({
  name,
  percentage,
  sum,
  resultsReset,
}) {
  const classes = useStyles();

  return (
    <div className={classes.resultItem}>
      <Typography variant="body1" component="p" color="textSecondary">
        {name}
      </Typography>
      <Box className={classes.box}>
        <Box className={classes.linearProgressContainer}>
          <LinearProgress
            color="primary"
            variant="determinate"
            value={resultsReset ? 0 : percentage}
            className={classes.linearProgress}
          />
        </Box>
        <Typography variant="body2" color="textSecondary">{`${(sum === 0
          ? 0
          : percentage
        ).toFixed(1)}%`}</Typography>
      </Box>
    </div>
  );
}
