/**
 * - Solamente propagar el estado en la jerarquía de componentes, no propagar el estado en propiedades independientes. -> No aplica con redux
 * - Probar componentes de https://github.com/reactstrap/reactstrap. -> OK
 * - Probar un router de reactjs para el manejo de rutas en la SPA. -> https://es.redux.js.org/docs/avanzado/uso-con-react-router.html, https://medium.com/@dvenegas/empezando-con-react-router-v4-2b8c31c7eb11 -> OK
 * - https://medium.com/devschile/c%C3%B3mo-estructurar-proyectos-react-ba6fac658ac5 -> OK
 * - Meter Redux(flux) para el control de estado de la APP. -> https://www.youtube.com/watch?v=OXWn4XiDUmw -> OK
 *
 * - Usar inmutable.js para mantener la inmutabilidad del estado.
 * - Mirar lo de "Action creators"
 *
 * - Iluminar la línea ganadora en el caso de que se produzca.
 * - Hacer una request a una API pública para probar los services de react: https://github.com/axios/axios
 * - Usar Rambda o Lodash para la programación funcional.
 * - Probar Typescript para ver que nos aporta. https://medium.com/@rossbulat/how-to-use-typescript-with-react-and-redux-a118b1e02b76
 * - https://es.redux.js.org/docs/introduccion/herencia.html#rx
 * - Ver testing con reactjs.
 * - https://medium.com/@jorgeucano/30-d%C3%ADas-con-rxjs-d%C3%ADa-1-e911e68f6063
*/

// Import styles
import "bootstrap/dist/css/bootstrap.css";
import "./style/index.scss"; // https://getbootstrap.com/docs/4.0/examples/cover/
// Import React library and plugins
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// Import react-redux
import { Provider } from "react-redux";
// Import store
import store from "./redux/store";
// Import root component
import App from "./components/App/";
// Render APP
render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById("root"), () => console.info("App rendered.")
);