/**
 * TODO:
 * - Probar componentes de https://github.com/reactstrap/reactstrap.
 * - Probar un router de reactjs para el manejo de rutas en la SPA.
 * - Hacer una request a una API pública para probar los services de react: https://github.com/axios/axios
 * - Usar Rambda o Lodash para la programación funcional.
 * - Meter Redux(flux) para el control de estado de la APP.
 * - Usar inmutable.js para mantener la inmutabilidad del estado.
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
