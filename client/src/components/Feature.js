import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
const styles = {
  root: {
    height: "350px",
    width: "350px",
  },
  media: {
    height: "60%",
    backgroundSize: "contain",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    "&:visited": {
      textDecoration: "none",
    },
    "&:active": {
      textDecoration: "none",
    },
  },
  button: {
    marginTop: "5em"
  }
};

function Feature({ classes, link, name, img }) {
  console.log("render feature");
  return (
    <Card className={classes.root}>
      <Link className={classes.link} to={link}>
        <CardMedia className={classes.media} image={img} title={name} />
        <CardActions className={classes.button}>
          <Button size="small" color="primary">{name}</Button>
        </CardActions>
      </Link>
    </Card>
  );
}

export default withStyles(styles)(Feature);
