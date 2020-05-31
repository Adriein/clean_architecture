import React, { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";
import UsersOverviewStyles from "../styles/UsersOverviewStyles";
import UserCard from "./UserCard";

//core imports
import { withStyles } from "@material-ui/core/styles";

//material-ui imports
import List from "@material-ui/core/List";
import CircularProgress from "@material-ui/core/CircularProgress";

function OverviewList(props) {
  const { classes } = props;
  const { state } = useContext(UsersContext);
  console.log("render list");
  return (
    <>
      {state.loading ? (
        <CircularProgress classes={{ root: classes.loading }} />
      ) : (
        <List>
          {state.data.map((user) => (
            <UserCard user={user}  key={user.id}/>
          ))}
        </List>
      )}
    </>
  );
}

export default withStyles(UsersOverviewStyles)(OverviewList);
