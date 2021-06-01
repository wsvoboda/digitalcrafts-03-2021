import React from "react";
import { useDispatch } from "react-redux";
import { postUsername } from "../actions/username-action";
import { postEmail } from "../actions/email-action";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        onChange={() => {
          postUsername(dispatch);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={() => {
          postEmail(dispatch);
        }}
      />
      <button>Submit</button>
    </div>
  );
}
