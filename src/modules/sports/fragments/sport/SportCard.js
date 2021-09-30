import React from "react";
import { SportCardComponent } from "../../../../modules";

export default function SportCard({ name, image, id, votes, handleVotes }) {
  const handleCount = (sportId) => handleVotes(sportId);

  return (
    <SportCardComponent
      name={name}
      image={image}
      id={id}
      votes={votes}
      handleCount={handleCount}
    />
  );
}
