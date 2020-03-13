import React, { useState, useEffect } from "react";
import auth from "../auth";

const FormSignin = props => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const payload = {
    username: username,
    email: email,
    password: password,
    image_file: "default.png"
  };

  const handleChangeUsername = event => {
    const { name, value } = event.target;
    setUsername(value);
  };

  const handleChangePassword = event => {
    const { name, value } = event.target;
    setPassword(value);
  };

  const handleChangeRepeatPassword = event => {
    const { name, value } = event.target;
    setRepeatPassword(value);
  };

  const handleChangeEmail = event => {
    const { name, value } = event.target;
    setEmail(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    if (password !== repeatPassword) {
      alert("the passwords fields don't match, please enter them again!");
    } else {
      let response;
      while (true) {
        response = await fetch(
          `https://saveyourcar-api.herokuapp.com/api/v1.0/users`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          }
        );
        const data = await response.json();
        if (response.status === 200) {
          setLoading(false);
          alert("Your account as been created, now you can LogIn");
          auth.signin(() => {
            props.props_parent.history.push("/login");
          });
          console.log(data);
          break;
        }
      }
    }
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <input
        className="form-control"
        onChange={handleChangeUsername}
        name="username"
        value={username}
        placeholder="Username"
        type="text"
      />
      <br />
      <input
        className="form-control"
        onChange={handleChangeEmail}
        name="email"
        value={email}
        placeholder="Email"
        type="email"
      />
      <br />
      <input
        className="form-control"
        onChange={handleChangePassword}
        name="password"
        value={password}
        placeholder="Password"
        type="password"
      />
      <input
        className="form-control"
        onChange={handleChangeRepeatPassword}
        name="repeatPassword"
        value={repeatPassword}
        placeholder="Confirm Password"
        type="password"
      />
      <button className="btn btn-secondary m-2" type="submit">
        sign In
      </button>
    </form>
  );
};

export default FormSignin;
export { auth };
