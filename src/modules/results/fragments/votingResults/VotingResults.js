import React, { useState } from "react";
import { VotingResultsComponent } from "../../../../modules";

export default function VotingResults({ setIsResultReset, sports }) {
  const allVotes = sports.map((sport) => sport.votes);
  const [sum, setSum] = useState(0);
  const [isPieChartShown, setIsPieChartShown] = useState(false);
  const [resultsReset, setResultsReset] = useState(false);

  const showPieChart = () => {
    setIsPieChartShown(true);
  };

  const hidePieChart = () => {
    setIsPieChartShown(false);
  };

  const resetResult = () => {
    sports.map((sport) => (sport.votes = 0));
    setIsResultReset(true);
    setTimeout(() => {
      setIsResultReset(false);
    }, 100);
  };

  const reset = () => {
    resetResult();
    setResultsReset(true);
    hidePieChart();
    setTimeout(() => {
      setResultsReset(false);
    }, 100);
  };

  const sumVotes = () => {
    const votes = sports.map((sport) => sport.votes);
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    const sum = votes.reduce(reducer);
    setSum(sum);
    return sum;
  };

  return (
    <VotingResultsComponent
      allVotes={allVotes}
      sports={sports}
      sum={sum}
      sumVotes={sumVotes}
      showPieChart={showPieChart}
      hidePieChart={hidePieChart}
      isPieChartShown={isPieChartShown}
      reset={reset}
      resultsReset={resultsReset}
    />
  );
}
