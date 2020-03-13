import React, { Component } from "react";
import Form from "../components/Form";

const LandingPage = props => {
  return (
    <div className="jumbotron mt-5">
      <h1>Log in</h1>
      <Form props_parent={props} />
    </div>
  );
};

export default LandingPage;
