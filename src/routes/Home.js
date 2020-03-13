import React from "react";
import auth from "../auth";
import { Link } from "react-router-dom";
import HomeComponent from "../components/HomeComponent";

const Home = props => {
  return (
    <div className="jumbotron">
      <h1>Home Page</h1>
      {auth.isAuthenticated() ? (
        <React.Fragment>
          <button
            className="btn btn-secondary m-2"
            onClick={() => {
              auth.logout(() => props.history.push("/"));
            }}
          >
            LogOut
          </button>
          <HomeComponent id={auth.getId()} />
        </React.Fragment>
      ) : (
        <Link to="/login">
          <button className="btn btn-secondary m-2">LogIn</button>
        </Link>
      )}
    </div>
  );
};

export default Home;
