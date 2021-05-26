import { useState } from "react";
import "./App.css";
import ComponentTwo from "./components/ComponentTwo";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <ComponentTwo />
    </div>
  );
}

export default App;
