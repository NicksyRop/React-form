import React, { useState } from "react";
import FormInput from "./components/FormInput";
import "./index.css";
import "./styles.css";

function App(props) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirm_password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      placeholder: "Username",
      label: "Username",
      type: "text",
      errorMessage:
        "Should be 3-16 long and shouldnt include special characters",
      required: true,
      pattern: "^[A-Za-z0-9]{3,6}$",
    },
    {
      id: 2,
      name: "email",
      placeholder: "Email",
      label: "Email",
      type: "email",
      errorMessage: "Should be a valid email address !",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      placeholder: "Birthday",
      label: "Birthday",
      type: "date",
      required: true,
    },
    {
      id: 4,
      name: "password",
      placeholder: "Password",
      label: "Password",
      type: "text",
      errorMessage:
        "Password should contain 8-20 characters include atleast 1 letter , 1 number and one special character",
      required: true,
      pattern: `^(?=.*[a-zA-Z])(?=.*d)(?=.*[!@#$%^&*()_+])[A-Za-zd][A-Za-zd!@#$%^&*()_+]{8,20}$`,
    },
    {
      id: 5,
      name: "confirm_password",
      placeholder: "Confirm_password",
      label: "Password",
      type: "password",
      errorMessage: "Password dont match",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
