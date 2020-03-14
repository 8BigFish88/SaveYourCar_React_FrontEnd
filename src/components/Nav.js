import React from "react";
import { Link, Redirect } from "react-router-dom";

function Nav(props) {
  console.log(props.auth);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        SaveYourCar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <Link to="/">
            <li className="nav-item nav-link">Home</li>
          </Link>
          {props.auth.isAuthenticated() ? (
            <React.Fragment>
              <Link to={`/users/${props.auth.getId()}`}>
                <li className="nav-item nav-link">Account</li>
              </Link>
              <Link to={`/users/${props.auth.getId()}/cars`}>
                <li className="nav-item nav-link">Cars</li>
              </Link>
              <Link to={`/users/${props.auth.getId()}/cars/new_car`}>
                <li className="nav-item nav-link">New Car</li>
              </Link>
              <Link
                onClick={() => {
                  props.auth.logout(() => <Redirect to="/" />);
                }}
              >
                <li className="nav-item nav-link">Log Out</li>
              </Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/login">
                <li className="nav-item nav-link">Login</li>
              </Link>
              <Link to="/signin">
                <li className="nav-item nav-link">Signin</li>
              </Link>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
