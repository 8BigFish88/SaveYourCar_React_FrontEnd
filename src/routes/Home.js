import React from "react";
import auth from "../auth";
import { Link, Redirect } from "react-router-dom";
import HomeComponent from "../components/HomeComponent";

const Home = props => {
  return (
    <React.Fragment>
      {auth.isAuthenticated() ? (
        <div>
          <div className="jumbotron mt-5">
            <svg viewBox="400 -20 1000 300">
              <text className="elegantshadow" x="50%" y="50%">
                SaveYourCar
              </text>
            </svg>
          </div>
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
          <svg viewBox="400 -20 1000 300">
            <Link to="/login">
              <text className="elegantshadow" x="50%" y="50%">
                SaveYourCar
              </text>
            </Link>
          </svg>
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
