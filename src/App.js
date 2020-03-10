import React, { useState } from "react";
import "./App.css";
import About from "./routes/About";
import Nav from "./components/Nav";
import Users from "./routes/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Item from "./routes/Item";
import LandingPage from "./routes/LandingPage";
import Home from "./routes/Home";
import ProtectedRoute from "./protectedRoute";
import "./App.css";
import { auth } from "./components/Form";
import Signin from "./routes/Signin";

function App() {
  return (
    <Router>
      <Switch>
        <Nav auth={auth} id={auth.id} />
      </Switch>
      <div className="container text-center">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LandingPage} />
          <Route path="/signin" component={Signin} />
          <ProtectedRoute path="/users/:id" component={Item} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:id" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
