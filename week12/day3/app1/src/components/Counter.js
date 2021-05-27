import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNumberToCounter,
  subtractNumberFromCounter,
} from "../actions/change-counter";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => addNumberToCounter(dispatch)}>Add</button>
      <button onClick={() => subtractNumberFromCounter(dispatch)}>
        Subtract
      </button>
    </div>
  );
}
