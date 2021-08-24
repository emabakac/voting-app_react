import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SportsList from "./components/Sports/SportsList";
import VotingResults from "./components/Results/VotingResults";
import { sportsData } from "./data/SportsData";
import { sumVotes } from "./functions";

function App() {

  const [sports, setSports] = useState([sportsData])

  const handleVotes = (sportId) => {
    const updatedCount = sportsData.map((sport) => {
      if (sport.id === sportId) {
        return (sport.votes = sport.votes + 1);
      } else {
        return sport;
      }
    });
    setSports(updatedCount);
  };

  return (
    <div>
      <Header />
      <SportsList handleVotes={handleVotes} />
      <VotingResults sumVotes={sumVotes} />
    </div>
  );
}

export default App;
