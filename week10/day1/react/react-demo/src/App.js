// import React, { useState } from "react";
import "./App.css";
import Nav from "./compenents/Nav";
import Sidebar from "./compenents/Sidebar";
import AboutContainer from "./compenents/AboutContainer";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <h1>This is our count {count}</h1>

//       <button onClick={() => setCount(count + 1)}>Add</button>
//       <button onClick={() => setCount(count - 1)}>Subtract</button>
//     </div>
//   );
// }

// function App() {
//   const [name, setName] = useState("Whitney");
//   const [secondName, setSecondName] = useState("Svoboda");

//   return (
//     <div className="App">
//       <h1>Your name is {name}</h1>
//       <h1>Your last name is {secondName}</h1>

//       <button onClick={() => setName("John")}>Change The Name</button>
//       <button onClick={() => setSecondName("Smith")}>
//         Change The Last Name
//       </button>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="body">
        <Sidebar />
        <AboutContainer />
      </div>
    </div>
  );
}

export default App;
