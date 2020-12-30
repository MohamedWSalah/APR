//import Header from "./components/Header/Header";
import HeaderTest from "./components/Header/HeaderTest";
import Footer from "./components/Footer";
import "./App.css";
import Body from "./components/Body";
import { useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { BrowserRouter, HashRouter, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound";
function App() {
  //Dont do this :)
  const [drawerWidth, setDrawerWidth] = useState(false);

  return (
    <div className="App">
      <HeaderTest drawerWidth={drawerWidth} />

      <HashRouter>
        <Switch>
          <Route exact path="/APR">
            {sessionStorage.getItem("name") ? (
              <Body drawerWidth={drawerWidth} setDrawerWidth={setDrawerWidth} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route exact path="/login">
            {sessionStorage.getItem("name") ? <Redirect to="/" /> : <Login />}
          </Route>

          <Route component={NotFound} />
        </Switch>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
