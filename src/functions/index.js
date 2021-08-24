import { sportsData } from "../data/SportsData";

export const sumVotes = () => {
  let sum = 0;

  for (let i = 0; i < sportsData.length; i++) {
    sum += sportsData[i].votes;
  }
  return sum;
};
