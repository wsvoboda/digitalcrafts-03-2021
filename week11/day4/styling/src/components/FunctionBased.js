import React, { useState } from "react";

export default function FunctionBased() {
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [status, setStatus] = useState("Eating...");
  const [object, setObject] = useState({});
  return (
    <div>
      <h1>Functional Component</h1>
      {loadingMessage}
      <button
        onClick={() => {
          setLoadingMessage("Finished ");
        }}
      >
        Finish Loading
      </button>
      <br></br>
      {status}
      <button
        onClick={() => {
          setStatus("Done Eating ");
        }}
      >
        Finish Your Food
      </button>
    </div>
  );
}
