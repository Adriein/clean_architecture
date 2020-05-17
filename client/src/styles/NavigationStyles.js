export default {
  root: {
    borderRight: "1px solid rgba(0, 0, 0, 0.12)",
    height: "100%",
  },
  user: {
    display: "flex",
    padding: "0.5em",
    alignItems: "center",
    "& p": {
      marginLeft: "10px"
    }
  },
  link: {
    textDecoration: "none",
    display:"flex",
    color: "inherit",
    '&:visited': {
      textDecoration: "none"
    },
    '&:active': {
      textDecoration: "none",
    },
  },
};
