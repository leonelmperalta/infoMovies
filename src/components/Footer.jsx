import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#000000",
    marginLeft: 0,
    height: "30px",
  },
  footerText: {
      color: "gray",
      textAlign: "left",
      padding: "2px 5px"
  }
};

const Footer = (props) => {
  const { classes } = props;
  return <div className={classes.footer}>
      <Typography variant= "body1" color= "secondary" className={classes.footerText}> Hecho por Leonel Peralta.</Typography>
  </div>;
};

export default withStyles(styles)(Footer);
