import React from "react";
import UserList from "./UsersList";
import SearchBar from "./SearchBar";
import { UsersProvider } from "../contexts/UsersContext";

//core imports
import { withStyles } from "@material-ui/core/styles";

//style imports
import UsersOverviewStyles from "../styles/UsersOverviewStyles";

//material-ui imports
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";

function UsersOverview(props) {
  const { classes } = props;
  console.log("render usersoverview");

  return (
    <Paper elevation={4}>
      <UsersProvider>
        <AppBar position="static">
          <SearchBar />
        </AppBar>
        <UserList />
      </UsersProvider>
    </Paper>
  );
}

export default withStyles(UsersOverviewStyles)(UsersOverview);
