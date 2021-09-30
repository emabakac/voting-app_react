import React, { useState, useEffect } from "react";
import { AppComponent } from "../../../modules";
import { sportsData } from "../../../data/sportsData";

function App() {
  const [sports, setSports] = useState([]);
  const [isResultReset, setIsResultReset] = useState(false);

  const initialResults = sportsData.map((sport) => {
    return { ...sport, votes: (sport.votes = 0) };
  });

  useEffect(() => {
    setSports(isResultReset ? initialResults : sportsData);
  }, [isResultReset]);

  const handleVotes = (sportId) => {
    const updatedCount = sports.map((sport) => {
      if (sport.id === sportId) {
        const incrementedCount = { ...sport, votes: sport.votes + 1 };
        return incrementedCount;
      } else {
        return sport;
      }
    });
    setSports(updatedCount);
  };

  return (
    <AppComponent
      handleVotes={handleVotes}
      sports={sports}
      setIsResultReset={setIsResultReset}
    />
  );
}

export default App;
