import React, { useState, useEffect } from "react";
import auth from "../auth";

const Form = props => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = event => {
    const { name, value } = event.target;
    setPassword(value);
  };

  const handleChangeEmail = event => {
    const { name, value } = event.target;
    setEmail(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let response;
    while (true) {
      response = await fetch(
        `https://saveyourcar-api.herokuapp.com/api/v1.0/users/${email}/${password}`
      );
      const data = await response.json();
      if (response.status === 200) {
        setLoading(false);
        auth.login(data.id, () => props.props_parent.history.push("/"));
        console.log(data);
        break;
      } else if (response.status === 400 || response.status === 404) {
        alert(data);
        break;
      }
    }
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
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
      <button className="btn btn-secondary m-2" type="submit">
        Log In
      </button>
    </form>
  );
};

export default Form;
export { auth };
