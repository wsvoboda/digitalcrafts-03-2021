import React, { useState } from "react";

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

function App() {
  const [name, setName] = useState("Whitney");
  const [secondName, setSecondName] = useState("Svoboda");

  return (
    <div className="App">
      <h1>Your name is {name}</h1>
      <h1>Your last name is {secondName}</h1>

      <button onClick={() => setName("John")}>Change The Name</button>
      <button onClick={() => setSecondName("Smith")}>
        Change The Last Name
      </button>
    </div>
  );
}

export default App;
