/**
 * TODO:
 * - Meter Redux(flux) para el control de estado de la APP
 * - Probar https://github.com/reactstrap/reactstrap.
 * - Usar inmutable.js para mantener la inmutabilidad del estado.
 * - Hacer una request a una API pública para probar los services de react: https://github.com/axios/axios
 * - Probar un router de reactjs para el manejo de rutas en la SPA
 * - https://es.redux.js.org/docs/introduccion/herencia.html#rx
*/

// Import styles
import "bootstrap/dist/css/bootstrap.css";
import "./style/index.scss";
// Import React library
import React from "react";
import { render } from "react-dom";
// Import root component
import Game from "./components/Game";
// Render APP
render(<Game/>, document.getElementById("root"), () => console.info("App rendered."));
