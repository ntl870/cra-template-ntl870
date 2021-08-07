import React, { useContext } from "react";
import logo from "../../logo.svg";
import "../../App.css";
import LayoutContext from "../../context/LayoutContext";
const LandingPage = () => {
  const { greeting } = useContext(LayoutContext);
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{greeting}</h2>
    </header>
  );
};

export default LandingPage;
