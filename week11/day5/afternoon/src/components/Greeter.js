import React from "react";

export default function Greeter(props) {
  return (
    <div>
      <h1>Welcome, {props.greet}</h1>
      <input type="text" onChange={(e) => props.setGreet(e.target.value)} />
    </div>
  );
}
