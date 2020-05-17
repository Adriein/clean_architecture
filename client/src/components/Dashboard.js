import React from "react";
import { withStyles } from "@material-ui/core/styles";
import DashboardStyles from "../styles/DashboardStyles";
import Navigation from "./Navigation";
import Overview from "./Overview";
import Feature from "./Feature";

import undraw_user from "../static/undraw_user.svg"
import undraw_diet from "../static/undraw_diet.svg"
import undraw_fitness from "../static/undraw_fitness.svg"
import undraw_chart from "../static/undraw_chart.svg"

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
        <div className={classes.features}>
          <Feature link={"/create-user"} name={"create user"} img={undraw_user}/>
          <Feature link={"/create-diet"} name={"create diet"} img={undraw_diet}/>
          <Feature link={"/create-plan"} name={"create plan"} img={undraw_fitness}/>
          <Feature link={"/charts"} name={"create chart"} img={undraw_chart}/>
        </div>
      </div>
    </div>
  );
}

export default withStyles(DashboardStyles)(Dashboard);
