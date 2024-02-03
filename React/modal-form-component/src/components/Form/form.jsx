import React, { useState } from "react";
import "./form.css";

function Form() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    let tempErrors = { email: "", password: "" };
    if (!formState.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formState.email))
      tempErrors.email = "Email is invalid";
    if (!formState.password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <p>{errors.email}</p>
      <input
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <p>{errors.password}</p>
      <input type="checkbox" /> Remember Me <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
