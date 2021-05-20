import "./App.css";
import React, { useState } from "react";
import { AppStyle } from "./components/styledComponents/AppStyles";
import SignUpForm from "./components/SignUpForm";
import UserDetails from "./components/UserDetails";

const emptyForm = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  retypedPassword: "",
};

function App() {
  const [formData, setFormData] = useState(emptyForm);
  const [userData, setUserData] = useState(emptyForm);

  const changeData = (formInfo) => {
    setUserData(formInfo);
    setFormData(emptyForm);
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
