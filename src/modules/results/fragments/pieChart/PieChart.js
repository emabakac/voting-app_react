import React from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart({ allVotes, sports }) {
  const data = {
    labels: sports.map((sport) => sport.name),
    datasets: [
      {
        data: allVotes,
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 212, 86)",
          "rgba(74, 50, 111)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
          "rgba(142, 205, 132)",
          "rgba(52, 208, 98)",
        ],
      },
    ],
  };

  return (
    <div>
      <Pie
        data={data}
        width={500}
        height={500}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
