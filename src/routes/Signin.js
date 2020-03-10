import React, { Component } from "react";
import FormSignin from "../components/FormSignin";

const Signin = props => {
  return (
    <div className="jumbotron">
      <h1>Sign In</h1>
      <FormSignin props_parent={props} />
    </div>
  );
};

export default Signin;
