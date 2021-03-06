import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import List from "./components/List";
import Desc from "./components/Desc";
import * as serviceWorker from "./serviceWorker";
const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/list" component={List} />
      <Route path="/list/:id" component={Desc} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
