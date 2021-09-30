import React from "react";
import { Typography } from "@material-ui/core";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Typography variant="h3" color="textSecondary">
        Which of the following sports do you prefer?
      </Typography>
    </div>
  );
}
