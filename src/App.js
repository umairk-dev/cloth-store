import React from "react";
import { Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./components/pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats page </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats/" component={HatsPage} />
      </Switch>
    </div>
  );
}
export default App;