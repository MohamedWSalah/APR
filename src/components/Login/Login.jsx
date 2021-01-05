import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  CardHeader,
  Avatar,
  InputAdornment,
  Paper,
  Grid,
} from "@material-ui/core";
import { Mail, Lock } from "@material-ui/icons";
import BUEHeaderLogo from "../../Assets/BUEIcon.png";
import { Router, Route, Switch, Redirect } from "react-router";

const styles = (theme) => ({
  card: {
    minWidth: 260,
  },
  extendedIcon: {
    marginRight: "3px",
  },
  action: {
    flexDirection: "row-reverse",
  },
  Paper: {
    maxWidth: "40%",
  },
});

export default withStyles(styles)(
  class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
      };
      this.handleValidation = this.handleValidation.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (name) => ({ target: { value } }) =>
      this.setState({
        [name]: value,
      });

    handleValidation = () => {
      const { username, password } = this.state;
      return username.length > 0 && password.length > 4;
    };

    handleKeyPress = (e) => {
      //console.log(this.handleValidation())
      if (/enter/gi.test(e.key) && this.handleValidation()) {
        this.handleClick();
      }
    };

    handleClick = () => {
      const { username, password } = this.state;
      sessionStorage.setItem("name", username);
      window.location.href = "/APR";
    };

    validateEmail = () => {
      const { username } = this.state;
      if (username.length < 1) return false;
      return !/[A-Z]{2,4}$/i.test(username);
    };

    render() {
      const { classes } = this.props,
        { username, password } = this.state;

      return (
        <Grid
          container
          spacing={1}
          alignItems="center"
          justify="center"
          style={{ minHeight: "50vh", paddingTop: "4vw" }}
        >
          <Grid item xs={10} sm={4}>
            <Paper>
              <Fragment>
                <Card className={classes.card}>
                  <CardHeader
                    style={{ alignContent: "center" }}
                    avatar={
                      <Avatar src={BUEHeaderLogo} className={classes.avatar} />
                    }
                  />
                  <CardContent>
                    <TextField
                      required
                      id="username"
                      label="Username"
                      value={username}
                      onChange={this.handleChange("username")}
                      onKeyDown={this.handleKeyPress}
                      error={this.validateEmail()}
                      margin="normal"
                      fullWidth
                      autoFocus
                      InputProps={{}}
                    />
                    <TextField
                      required
                      id="password"
                      label="Password"
                      helperText=""
                      value={password}
                      type="password"
                      onChange={this.handleChange("password")}
                      onKeyDown={this.handleKeyPress}
                      margin="normal"
                      fullWidth
                    />
                  </CardContent>
                  <CardActions className={classes.action}>
                    <Button
                      type="submit"
                      onKeyPress={(e) =>
                        e.key === "Enter" ? this.handleClick() : null
                      }
                      disabled={!this.handleValidation()}
                      color="primary"
                      style={{ width: "100%" }}
                      variant="contained"
                      onClick={() => this.handleClick()}
                    >
                      Login
                    </Button>
                  </CardActions>
                </Card>
              </Fragment>
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }
);
