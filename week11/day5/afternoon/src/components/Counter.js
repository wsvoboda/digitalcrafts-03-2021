import React from "react";

export default function Greeter(props) {
  return (
    <div>
      <button
        onClick={(e) => {
          props.setCount(props.count + 1);
        }}
      >
        MORE COOKIES
      </button>
      <h1>I need {props.count} of Grandma'a cookies</h1>
      <button
        onClick={(e) => {
          props.setCount(props.count - 1);
        }}
      >
        LESS COOKIES
      </button>
    </div>
  );
}
