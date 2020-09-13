import React, { Component } from "react";
import "./app.css";
import {
  TopBar,
  Hospitals,
  Notifications,
  Contact,
  Home,
  Cases,
} from "./components/index";
import { Switch, Route } from "react-router";
import { Box } from "@chakra-ui/core";
const App = () => {
  return (
    <Box backgroundColor="custom.white" minH="100vh">
      <TopBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/helpline" component={Contact} />
        <Route exact path="/hospitals" component={Hospitals} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/daily-cases" component={Cases} />
      </Switch>
    </Box>
  );
};

export default App;
