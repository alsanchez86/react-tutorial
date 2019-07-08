// Style
import "bootstrap/dist/css/bootstrap.css";
import "./style/index.scss";
// React
import React from "react";
import ReactDOM from "react-dom";
// Component
import GameComponent from "./component/GameComponent.component";

// Render root app component
ReactDOM.render(<GameComponent/>, document.getElementById("root"));