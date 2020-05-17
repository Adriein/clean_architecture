import React, { memo } from "react";

//core imports
import { withStyles } from "@material-ui/core/styles";
import UsersOverviewStyles from "../styles/UsersOverviewStyles";

//icons
import VisibilityIcon from "@material-ui/icons/Visibility";
import ErrorIcon from "@material-ui/icons/Error";
import EmailIcon from "@material-ui/icons/Email";

//material ui imports
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

function UserCard(props) {
  const { classes } = props;
  console.log("render usercard");
  return (
    <ListItem divider={true} alignItems="flex-start" key={props.user.id}>
      <ListItemAvatar>
        <Avatar alt={props.user.first_name} src={props.user.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={`${props.user.first_name} ${props.user.last_name}`}
        secondary={
          <>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </>
        }
      />
      <IconButton edge="end" aria-label="delete">
        <VisibilityIcon />
      </IconButton>
      <IconButton edge="end" aria-label="delete">
        <Badge color="secondary" badgeContent={0}>
          <EmailIcon />
        </Badge>
      </IconButton>
      <IconButton edge="end" aria-label="delete">
        <ErrorIcon />
      </IconButton>
    </ListItem>
  );
}

export default withStyles(UsersOverviewStyles)(memo(UserCard));
