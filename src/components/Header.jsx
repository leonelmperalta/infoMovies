import React from "react";
import { AppBar, Toolbar, Typography, Button, Link } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import buttonsData from "./resources/buttonsData.js";
import {
  Link as RouterLink
} from "react-router-dom";

const styles = {
  menuButton: {
    fontFamily: "Open sans, sans-serif",
    marginLeft: "38px",
    size: "18px",
    fontWeight: 700,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    textAlign: "left",
  },
  header: {
    backgroundColor: "#000000",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
};

const Header = (props) => {
  const { classes } = props;
  const getButtonData = () => {
    return buttonsData.map(({ label, href }) => {
      {
        return (
          <Button
            {...{
              color: "inherit",
              key:  label ,
              to:  href ,
              component: RouterLink,
              className: classes.menuButton,
            }}
          >
            {label}
          </Button>
        );
      }
    });
  };

  return (
    <header>
      <AppBar className={classes.header}>
        <Toolbar>
          <Typography variant="h6" className={classes.logo}>
            <Link color="inherit" to="/Home" component={RouterLink}> InfoMovies </Link>
          </Typography>
          <div className={classes.toolbar}>{getButtonData()}</div>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default withStyles(styles)(Header);
