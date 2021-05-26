import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function UsernameChange() {
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{username}</p>
      <button onClick={() => dispatch({ type: "CHANGE_NAME" })}>
        Change Username
      </button>
    </div>
  );
}
