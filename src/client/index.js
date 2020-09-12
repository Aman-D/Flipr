import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";
import UserProvider from "./provider/UserProvider";
ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
