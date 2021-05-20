import React from "react";
import {
  SignUpButton,
  SignUpFormInput,
  SignUpFormCSS,
} from "./styledComponents/SignUpFormStyles";

export default function SignUpForm(props) {
  console.log(props.firstName);
  return (
    <div>
      <h1>Create Account</h1>
      <SignUpFormCSS action="">
        <SignUpFormInput
          onChange={(e) => props.setFirstName(e.target.value)}
          type="text"
          value={props.firstName}
          placeholder="First Name"
        />
        <SignUpFormInput type="text" placeholder="Last Name" />
        <SignUpFormInput type="email" placeholder="Email" />
        <SignUpFormInput type="password" placeholder="Password" />
        <SignUpFormInput type="password" placeholder="Re-type Password" />
        <SignUpButton>SIGN UP</SignUpButton>
      </SignUpFormCSS>
    </div>
  );
}
