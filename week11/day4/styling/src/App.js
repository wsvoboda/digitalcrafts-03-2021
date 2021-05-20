import "./App.css";
import React, { useState } from "react";
import { AppStyle } from "./components/styledComponents/AppStyles";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const changeData = (formData) => {
    setUserData({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <AppStyle className="App">
      <SignUpForm
        formData={formData}
        setFormData={setFormData}
        changeData={changeData}
      />
      <UserDetails userData={userData} />
    </AppStyle>
  );
}

export default App;
