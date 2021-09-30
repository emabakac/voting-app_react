import React from "react";
import { Header, SportsList, VotingResults } from "../../../modules";
import "./AppComponent.css";

export default function AppComponent({
  handleVotes,
  sports,
  setIsResultReset,
}) {
  return (
    <>
      <Header />
      <SportsList handleVotes={handleVotes} sports={sports} />
      <VotingResults setIsResultReset={setIsResultReset} sports={sports} />
    </>
  );
}
