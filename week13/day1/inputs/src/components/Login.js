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
        onChange={(e) => {
          postUsername(dispatch, e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          postEmail(dispatch, e.target.value);
        }}
      />
      <button>Submit</button>
    </div>
  );
}
