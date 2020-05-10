import React, { memo } from "react";

//core imports
import { withStyles } from "@material-ui/core/styles";
import UsersOverviewStyles from "../styles/UsersOverviewStyles";

//icons
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

//material ui imports
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

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
        <DeleteIcon />
      </IconButton>
      <IconButton edge="end" aria-label="delete">
        <EditIcon />
      </IconButton>
    </ListItem>
  );
}

export default withStyles(UsersOverviewStyles)(memo(UserCard));
