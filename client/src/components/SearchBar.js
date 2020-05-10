import React, { useContext, useState } from "react";
import { UsersContext } from "../contexts/UsersContext";

//hooks imports
import usePopover from "../hooks/usePopover";
import useToggle from "../hooks/useToggle";

//core imports
import { withStyles } from "@material-ui/core/styles";

//style imports
import UsersOverviewStyles from "../styles/UsersOverviewStyles";

//icons
import BuildIcon from "@material-ui/icons/Build";
import SearchIcon from "@material-ui/icons/Search";

//material-ui imports
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import InputAdornment from "@material-ui/core/InputAdornment";
import Popover from "@material-ui/core/Popover";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function SearchBar(props) {
  const { classes } = props;
  const { dispatch } = useContext(UsersContext);
  const [isActive, toggleActive] = useToggle();
  const [isPending, togglePending] = useToggle();
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, anchor, onOpen, onClose] = usePopover();
  console.log("render searchbar");
  let timeoutId = undefined;
  const handleChange = (event) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    event.persist();
    timeoutId = setTimeout(() => {
      setSearchTerm(event.target.value);
      dispatch({ type: "FILTER_SEARCH", searchTerm: event.target.value });
    }, 800);
  };

  return (
    <Toolbar classes={{ gutters: classes.space }}>
      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          fullWidth
          onChange={handleChange}
        />
      </div>
      <IconButton
        aria-label="filters"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={(event) => onOpen(event)}
        id={1}
      >
        <BuildIcon />
      </IconButton>
      <Popover
        id={1}
        open={isOpen}
        anchorEl={anchor}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{ paper: classes.popover }}
      >
        <FormControlLabel
          control={<Checkbox checked={isActive} onChange={toggleActive} color="primary" />}
          label="Active"
        />
        <FormControlLabel
          control={<Checkbox checked={isPending} onChange={togglePending} color="primary" />}
          label="Pending"
        />
      </Popover>
    </Toolbar>
  );
}

export default withStyles(UsersOverviewStyles)(SearchBar);
