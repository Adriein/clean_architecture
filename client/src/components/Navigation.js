import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import NavigationStyles from "../styles/NavigationStyles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import KitchenIcon from "@material-ui/icons/Kitchen";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AssignmentIcon from "@material-ui/icons/Assignment";
import SettingsIcon from "@material-ui/icons/Settings";
import MailIcon from "@material-ui/icons/Mail";
import PeopleIcon from "@material-ui/icons/People";
import { Link, useLocation } from "react-router-dom";

function Navigation(props) {
  console.log("render menu");
  const { pathname } = useLocation();
  const { classes } = props;
  const icon = (text) => {
    switch (text) {
      case "Home":
        return <HomeIcon />;
      case "Users":
        return <PeopleIcon />;
      case "Diet":
        return <KitchenIcon />;
      case "Plans":
        return <AssignmentIcon />;
      case "Charts":
        return <AssessmentIcon />;
      case "Settings":
        return <SettingsIcon />;
      case "Mail":
        return <MailIcon />;
      default:
        return "";
    }
  };

  const link = (text) => {
    switch (text) {
      case "Home":
        return "/";
      case "Users":
        return "/users";
      case "Diet":
        return "/diet";
      case "Plans":
        return "/plans";
      case "Charts":
        return "/charts";
      case "Settings":
        return "/settings";
      case "Mail":
        return "/messages";
      default:
        return "";
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.user}>
        <Avatar>A</Avatar>
        <p>Adria Claret</p>
      </div>
      <Divider />
      <List>
        {["Home", "Users", "Diet", "Plans", "Charts", "Settings", "Mail"].map((text) => (
          <Link className={classes.link} to={link(text)}  key={text} >
            <ListItem button selected={pathname === link(text) ? true : false}>
              <ListItemIcon>{icon(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}

export default withStyles(NavigationStyles)(Navigation);
