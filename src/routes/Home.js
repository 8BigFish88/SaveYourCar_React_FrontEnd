import React from "react";
import auth from "../auth";
import { Link } from "react-router-dom";
import HomeComponent from "../components/HomeComponent";

const Home = props => {
  return (
    <React.Fragment>
      {auth.isAuthenticated() ? (
        <div>
          <HomeComponent id={auth.getId()} />
          <button
            className="btn btn-secondary m-2"
            onClick={() => {
              auth.logout(() => props.history.push("/"));
            }}
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="jumbotron mt-5">
          <h1 className="elegantshadow">SaveYourCar</h1>
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
