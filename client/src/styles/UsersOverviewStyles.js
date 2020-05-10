import { fade } from "@material-ui/core/styles";

export default {
  search: {
    position: "relative",
    borderRadius: "5px",
    backgroundColor: fade("#fff", 0.15),
    "&:hover": {
      backgroundColor: fade("#fff", 0.25),
    },
    marginRight: "10px",
    marginLeft: 0,
    paddingLeft: "10px",
    width: "100%",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: "10px",
    paddingLeft: "0px",
    width: "100%",
  },
  space: {
    paddingRight: "1em",
  },
  loading: {
    position: "absolute",
    top: "300px",
    left: "440px",
  },
  popover: {
    padding: "1em",
  },
};
