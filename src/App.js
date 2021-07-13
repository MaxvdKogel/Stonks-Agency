import React from 'react';
import Vue from 'vue';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./css/index.css";
import Home from "./views/Home.js";
import Vastgoed from "./views/Vastgoed.js";
import Loader from "./helpers/Loader/Loader";

window.Event = new Vue({});

const App = function() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/casestudy/groningen-stad-vastgoed"><Vastgoed /></Route>
            </Switch>
            <Loader />
        </Router>
    )
}

export default App;