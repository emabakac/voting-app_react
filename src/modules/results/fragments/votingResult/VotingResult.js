import React from "react";
import { VotingResultComponent } from "../../../../modules";

export default function VotingResult({ name, votes, sumVotes, resultsReset }) {
  const sum = sumVotes();
  const percentage = (votes / sum) * 100;

  return (
    <VotingResultComponent
      name={name}
      percentage={percentage}
      sum={sum}
      resultsReset={resultsReset}
    />
  );
}
