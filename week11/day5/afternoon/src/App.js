import "./App.css";
import Greeter from "./components/Greeter";
import Counter from "./components/Counter";
import React, { useState } from "react";

function App() {
  const [greet, setGreet] = useState("");
  const [count, setCount] = useState(40);
  return (
    <div className="App">
      <Greeter greet={greet} setGreet={setGreet} />
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
