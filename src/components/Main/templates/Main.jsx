// Import React library
import React from "react";
// Import react router
import { Switch, Route } from "react-router-dom";
// Import children components
import Game from "../../Game/";
import Dummy from "../../Dummy/";

export default (p) =>

<Switch>
    <Route exact path="/" component={Game} />
    <Route path="/dummy" component={Dummy} />
</Switch>