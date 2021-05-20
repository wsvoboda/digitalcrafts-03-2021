import React from "react";
import {
  SignUpButton,
  SignUpFormInput,
  SignUpFormCSS,
} from "./styledComponents/SignUpFormStyles";

export default function SignUpForm(props) {
  return (
    <div>
      <h1>Create Account</h1>
      <SignUpFormCSS onSubmit={() => props.changeData(props.formData)}>
        <SignUpFormInput
          name="firstName"
          onChange={(e) =>
            props.setFormData({ ...props.formData, firstName: e.target.value })
          }
          type="text"
          value={props.formData.firstName}
          placeholder="First Name"
        />
        <SignUpFormInput
          name="lastName"
          onChange={(e) =>
            props.setFormData({ ...props.formData, lastName: e.target.value })
          }
          type="text"
          value={props.formData.lastName}
          placeholder="Last Name"
        />
        <SignUpFormInput
          onChange={(e) =>
            props.setFormData({ ...props.formData, email: e.target.value })
          }
          name="email"
          type="email"
          value={props.formData.email}
          placeholder="Email"
        />
        <SignUpFormInput type="password" placeholder="Password" />
        <SignUpFormInput
          onChange={(e) =>
            props.setFormData({ ...props.formData, password: e.target.value })
          }
          name="password"
          type="password"
          value={props.formData.password}
          placeholder="Re-type Password"
        />
        <SignUpButton type="submit">SIGN UP</SignUpButton>
      </SignUpFormCSS>
    </div>
  );
}
