import React from "react";
import ReactDOM from "react-dom";
// import pi, { doublePi, triplePi } from "./math.js";
// Wildcard import all from piobject call default and functions below not always the best practice
import * as pi from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
