import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUsername } from "../actions/username-action";
import { postEmail } from "../actions/email-action";
import { postInfo } from "../actions/info-action";

export default function Login() {
  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Login Information</h1>

      <input
        type="text"
        placeholder={username}
        onChange={(e) => {
          postUsername(dispatch, e.target.value);
        }}
      />
      <input
        type="email"
        placeholder={email}
        onChange={(e) => {
          postEmail(dispatch, e.target.value);
        }}
      />
      <button
        onClick={() => {
          postInfo(dispatch, username, email);
        }}
      >
        Submit
      </button>
    </div>
  );
}
