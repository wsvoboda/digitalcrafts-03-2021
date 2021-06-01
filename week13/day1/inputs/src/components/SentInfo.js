import React from "react";
import { useSelector } from "react-redux";

export default function SentInfo() {
  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  return (
    <div>
      <h1>Entered Information</h1>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
}
