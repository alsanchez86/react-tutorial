/**
 * TODO:
 * - Meter Redux(flux) para el control de estado de la APP
 * - Probar https://github.com/reactstrap/reactstrap
*/

// Style
import "bootstrap/dist/css/bootstrap.css";
import "./style/index.scss";
// React
import React from "react";
import ReactDOM from "react-dom";
// Component
import Game from "./component/Game";

// Render root app component
ReactDOM.render(<Game/>, document.getElementById("root"));