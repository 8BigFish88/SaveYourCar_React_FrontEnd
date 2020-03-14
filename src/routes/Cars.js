import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeComponent from "../components/HomeComponent";
import auth from "../auth";

function Cars({ match }) {
  return (
    <div className="jumbotron mt-5 ">
      <h1>Cars Page</h1>
      <HomeComponent id={auth.getId()} />
    </div>
  );
}

export default Cars;
