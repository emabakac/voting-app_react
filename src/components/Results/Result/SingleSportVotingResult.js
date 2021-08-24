import React from "react";
import { LinearProgress, Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function Result({ name, votes, sumVotes }) {
  const classes = useStyles();

  const sum = sumVotes()
  const percentage = (votes / sum) * 100;

  return (
    <div className={classes.resultItem}>
      <Typography variant="body1" component="p" style={{ color: "white" }}>
        {name}
      </Typography>
      <Box className={classes.box}>
        <Box className={classes.linearProgressContainer}>
          <LinearProgress
            color="primary"
            variant="determinate"
            value={percentage}
            className={classes.linearProgress}
          />
        </Box>
        <Typography variant="body2" style={{ color: "white" }}>{`${(sum === 0
          ? 0
          : percentage
        ).toFixed(1)}%`}</Typography>
      </Box>
    </div>
  );
}
