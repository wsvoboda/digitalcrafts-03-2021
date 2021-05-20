import React from "react";

export default function UserDetails({ userData }) {
  return (
    <div>
      <h1>User Detail</h1>
      <p>{userData.firstName}</p>
      <p>{userData.lastName}</p>
      <p>{userData.email}</p>
      <p>{userData.password}</p>
      <p>{userData.retypedPassword}</p>
    </div>
  );
}
