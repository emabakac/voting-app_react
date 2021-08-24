import React from "react";
import { Typography } from "@material-ui/core";
import "./styles.css";

export default function Header() {
  return (
    <div className="header">
      <Typography variant="h3" style={{ color: "white" }}>
        Which of the following sports do you prefer?
      </Typography>
    </div>
  );
}
