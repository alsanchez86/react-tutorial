// Import component style
import "./style/index.scss";
// Import React library
import React from "react";
// Import components
import Header from "../../Header";
import Main from "../../Main";

export default () =>

<div>
    <Header/>

    <div className="main-content">
        <Main/>
    </div>
</div>