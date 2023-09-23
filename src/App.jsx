import React from "react";
import "./app.css";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Infographic from "./components/Infographic";
import BodyText from "./components/BodyText";
import InputLabel from "./components/InputLabel";

import Footer from "./components/Footer";

import background from "./assets/background.svg";

function App() {
  return (
    <div>
      <Logo />
      <Header />
      <Infographic />
      <BodyText />
      <InputLabel />

      <Footer />
    </div>
  );
}

export default App;
