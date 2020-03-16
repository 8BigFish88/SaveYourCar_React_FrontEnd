import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE
};

const AlertTemplate2 = ({ style, options, message, close }) => (
  <div
    className="alert alert-danger alert-warning alert-dismissible fade show"
    role="alert"
    style={style}
  >
    {options.type === "info" && "!"}
    {options.type === "success" && ":)"}
    {options.type === "error" && ":("}
    {message}
    <button
      type="button"
      className="close"
      data-dismiss="alert"
      aria-label="Close"
      onClick={close}
    >
      &times;
    </button>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <AlertProvider template={AlertTemplate2} {...options}>
      <App />
    </AlertProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
