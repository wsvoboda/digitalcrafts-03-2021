import React from "react";
import { useSelector } from "react-redux";

export default function SentInfo() {
  const info = useSelector((state) => state.info);
  return (
    <div>
      <h1>Entered Information</h1>
      <p>{info.username}</p>
      <p>{info.email}</p>
    </div>
  );
}
