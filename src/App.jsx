import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Home />
    </div>
  );
};

export default App;
