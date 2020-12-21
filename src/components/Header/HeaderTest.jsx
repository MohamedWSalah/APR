import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AppBarCollapse from "./AppBarCollapse";
import BUEHeaderLogo from "../../Assets/BUE-logo.png";
import headerLogo from "../../Assets/signing3.jpg";
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "black",
  },
  HeaderImg: {
    borderTop: "1px solid black",
    height: "100px",
    marginTop: "0",
    width: "100%",
    backgroundImage: "url(" + headerLogo + ")",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "relative",
    top: 0,
    left: 0,
  },
  layer: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  navigation: {
    position: "relative",
    backgroundColor: "white",
    borderTop: "2px solid red",
  },
  toggleDrawer: { color: "black" },
  appTitle: { color: "black" },
};

function ButtonAppBar(props) {
  const { classes, drawerWidth } = props;
  const name = sessionStorage.getItem("name");
  return (
    <div style={drawerWidth ? { marginLeft: 300 } : null}>
      <AppBar position="fixed" className={classes.navigation}>
        <Toolbar>
          <img src={BUEHeaderLogo} alt="" style={{ height: 50, width: 130 }} />

          <AppBarCollapse />
        </Toolbar>
      </AppBar>
      {name ? (
        <div className={classes.HeaderImg}>
          <div className={classes.layer}>
            <p
              style={{ textAlign: "center", color: "white", fontSize: "20px" }}
            >
              Welcome, {name}
            </p>
            <p
              style={{ textAlign: "center", color: "white", fontSize: "20px" }}
            >
              Annual Program Review
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
