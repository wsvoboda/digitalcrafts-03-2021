import "./App.css";
import Counter from "./components/Counter.js";
import NameChange from "./components/NameChange";
import Weather from "./components/Weather";
import Day from "./components/Day.js";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "lightblue", height: "100%", width: "60%" }}
    >
      <h1>App.js</h1>
      <Counter />
      <NameChange />
      <Weather />
      <Day />
    </div>
  );
}

export default App;
