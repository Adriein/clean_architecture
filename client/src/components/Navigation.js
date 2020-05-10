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

function Navigation(props) {
  console.log("render menu");
  const { classes } = props;
  const icon = (text) => {
    switch (text) {
      case "Home":
        return <HomeIcon />;
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
        return <MailIcon />;
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
        {["Home", "Diet", "Plans", "Charts", "Settings", "Mail"].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>{icon(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default withStyles(NavigationStyles)(Navigation);
