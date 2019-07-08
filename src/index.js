/**
 * TODO:
 * - Meter Redux(flux) para el control de estado de la APP
 * - Probar https://github.com/reactstrap/reactstrap
 * - Hacer una request a una API pública para probar los services de react: https://github.com/axios/axios
*/

// Import styles
import "bootstrap/dist/css/bootstrap.css";
import "./style/index.scss";
// Import React library
import React from "react";
import ReactDOM from "react-dom";
// Import root component
import Game from "./component/Game";
// Init APP: Render root app component
ReactDOM.render(<Game/>, document.getElementById("root"), () => console.info("App rendered."));