// Import styles
import "bootstrap/dist/css/bootstrap.css";
import "./style/index.scss";
// Import React library and plugins
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// Import react-redux
import { Provider } from "react-redux";
// Import store
import store from "./redux/store";
// Import root component
import App from "./components/App";

const elementId = "root";

// Render APP
render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById(elementId), () => console.info("App rendered on " + elementId)
);