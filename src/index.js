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