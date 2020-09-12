import React, { Component } from "react";
import "./app.css";
import {
  TopBar,
  Hospitals,
  Notifications,
  Contact,
  Home,
} from "./components/index";
import { Switch, Route } from "react-router";

const App = () => {
  return (
    <>
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/helpline" component={Contact} />
        <Route exact path="/hospitals" component={Hospitals} />
        <Route exact path="/notifications" component={Notifications} />
      </Switch>
    </>
  );
};

export default App;
