// Import React library
import React from "react";
// Import react router
import { Switch, Route, Redirect } from "react-router-dom";
// Import children components
import Game from "../../Game/";
import Dummy from "../../Dummy/";

export default () =>

<Switch>
    <Route path="/game" component={Game} />
    <Route path="/dummy" component={Dummy} />
    <Redirect from="/" to="/game"/>
</Switch>