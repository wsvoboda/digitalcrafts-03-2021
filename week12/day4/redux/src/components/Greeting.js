import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFakeData,
  addSenatorToList,
  removeElonFromList,
} from "../actions/greetingActions";

export default function Greeting() {
  const fakeData = useSelector((state) => state.fakeData);
  const governmentOfficials = useSelector((state) => state.governmentOfficials);
  const celebrities = useSelector((state) => state.celebrities);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello Redux</h1>
      {fakeData.map((person) => (
        <p>{person.name}</p>
      ))}
      <button onClick={() => changeFakeData(dispatch)}>Add Name</button>
      {governmentOfficials.map((official) => (
        <p>{official}</p>
      ))}
      <button onClick={() => addSenatorToList(dispatch)}>
        Add Senator To List
      </button>
      {celebrities.map((celeb) => (
        <p>{celeb.name}</p>
      ))}

      <button onClick={() => removeElonFromList(dispatch)}>
        Remove Doge Lord
      </button>
    </div>
  );
}
