/**
 * TODO:
 * - https://medium.com/devschile/c%C3%B3mo-estructurar-proyectos-react-ba6fac658ac5
 * - Solamente propagar el estado en la jerarquía de componentes, no propagar el estado en propiedades independientes.
 * - Iluminar la línea ganadora en el caso de que se produzca.
 * - Probar componentes de https://github.com/reactstrap/reactstrap. -> OK
 * - Probar un router de reactjs para el manejo de rutas en la SPA. -> https://es.redux.js.org/docs/avanzado/uso-con-react-router.html, https://medium.com/@dvenegas/empezando-con-react-router-v4-2b8c31c7eb11
 * - Hacer una request a una API pública para probar los services de react: https://github.com/axios/axios
 * - Usar Rambda o Lodash para la programación funcional.
 * - Probar Typescript para ver que nos aporta.
 * - Meter Redux(flux) para el control de estado de la APP. -> https://www.youtube.com/watch?v=OXWn4XiDUmw
 * - Usar inmutable.js para mantener la inmutabilidad del estado.
 * - https://es.redux.js.org/docs/introduccion/herencia.html#rx
 * - Ver testing con reactjs.
*/

// Import styles
import "bootstrap/dist/css/bootstrap.css";
// Import React library and plugins
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// Import root component
import App from "./components/App/";
// Render APP
render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("root"), () => console.info("App rendered.")
);
