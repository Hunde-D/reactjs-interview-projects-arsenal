import "./App.css";

// import { useState } from "react";

import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
    </div>
  );
}

export default App;
