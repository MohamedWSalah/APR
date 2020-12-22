import React from "react";
import { Button, MenuItem } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
const styles = (theme) => ({
  root: {},
  btnHover: {
    height: "4vw",
    "&:hover": {
      color: "white",
      backgroundColor: "#AF0000",
      textDecoration: "underline",
    },
    fontWeight: "bold",
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
    color: "black",
  },

  fontWeight: "bold",
});

const AppBarCollapse = (props) => (
  <div className={props.classes.root}>
    <ButtonAppBarCollapse>
      <MenuItem>
        <Button>Home</Button>
      </MenuItem>
      <MenuItem>
        <Button>Annual Program Review</Button>
      </MenuItem>
    </ButtonAppBarCollapse>
    <div className={props.classes.buttonBar} id="appbar-collapse">
      <Button className={props.classes.btnHover}>Home</Button>
      <Button className={props.classes.btnHover} color="secondary">
        Annual Program Review
      </Button>
      {sessionStorage.getItem("name") ? null : (
        <Button className={props.classes.btnHover} href="/">
          Login
        </Button>
      )}
    </div>
  </div>
);

export default withStyles(styles)(AppBarCollapse);
