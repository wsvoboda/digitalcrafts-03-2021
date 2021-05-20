import React, { useState } from "react";

export default function FunctionBased() {
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  return (
    <div>
      <h1>Functional Component</h1>
      {loadingMessage}
      <button>Finished Loading</button>
    </div>
  );
}
