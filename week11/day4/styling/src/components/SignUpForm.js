import React from "react";
import {
  SignUpButton,
  SignUpFormInput,
  SignUpFormCSS,
} from "./styledComponents/SignUpFormStyles";

export default function SignUpForm({ formData, setFormData, changeData }) {
  return (
    <div>
      <h1>Create Account</h1>
      <SignUpFormCSS>
        <SignUpFormInput
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          type="text"
          value={formData.firstName}
          placeholder="First Name"
        />
        <SignUpFormInput
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          type="text"
          value={formData.lastName}
          placeholder="Last Name"
        />
        <SignUpFormInput
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          value={formData.email}
          placeholder="Email"
        />
        <SignUpFormInput
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="password"
          value={formData.password}
          placeholder="Password"
        />
        <SignUpFormInput
          onChange={(e) =>
            setFormData({ ...formData, retypedPassword: e.target.value })
          }
          type="password"
          value={formData.retypedPassword}
          placeholder="Re-Type Password"
        />
      </SignUpFormCSS>
      <SignUpButton onClick={() => changeData(formData)}>SIGN UP</SignUpButton>
    </div>
  );
}
