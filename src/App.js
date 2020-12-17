//import Header from "./components/Header/Header";
import HeaderTest from "./components/Header/HeaderTest";
import Footer from "./components/Footer";
import "./App.css";
import Body from "./components/Body";
import { useState } from "react";

function App() {
  //Dont do this :)
  const [drawerWidth, setDrawerWidth] = useState(false);
  return (
    <div className="App">
      <HeaderTest drawerWidth={drawerWidth} />
      <Body drawerWidth={drawerWidth} setDrawerWidth={setDrawerWidth} />
      <Footer />
    </div>
  );
}

export default App;
