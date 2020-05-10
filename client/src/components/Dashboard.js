import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DashboardStyles from "../styles/DashboardStyles";
import Navigation from "./Navigation";
import Overview from "./Overview";

function Dashboard(props) {
  const { classes } = props;
  console.log("render dashboard");
  return (
    <div className={classes.root}>
      <div className={classes.navigation}>
        <Navigation />
      </div>
      <div className={classes.container}>
        <Overview />
        <div>features</div>
      </div>
    </div>
  );
}

export default withStyles(DashboardStyles)(Dashboard);
