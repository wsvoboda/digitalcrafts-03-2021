import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fillArrayWithData } from "../actions/fill-array-action";

export default function FillArray() {
  const newArray = useSelector((state) => state.newArray);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Change Array</h1>
      {newArray.map((person) => (
        <p>{person.name}</p>
      ))}
      <button onClick={() => fillArrayWithData(dispatch)}>Fill Array</button>
    </div>
  );
}
