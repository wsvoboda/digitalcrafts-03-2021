import React from "react";

export default function UserDetails(props) {
  return (
    <div>
      <h1>User Detail</h1>
      <p>{props.userData.firstName}</p>
      <p>{props.userData.lastName}</p>
      <p>{props.userData.email}</p>
      <p>{props.userData.password}</p>
    </div>
  );
}
