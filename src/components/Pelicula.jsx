import React from "react";
import {Paper} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";


const styles = {
    paper: {
      position: "absolute",
      top: "10em",
      left: "32em",
      width: "50em",
      height: "30em",
      padding: "10px",
      display: "inline-block"
    }
  }


const Pelicula = (props) => {
  const {classes} = props;
  
  return (
      <Paper className={classes.paper}></Paper>
  );
};

export default withStyles(styles)(Pelicula);
