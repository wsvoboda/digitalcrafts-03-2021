import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUsername } from "../actions/change-username";

export default function UsernameChange() {
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{username}</p>
      <button onClick={() => changeUsername(dispatch)}>Change Username</button>
    </div>
  );
}
