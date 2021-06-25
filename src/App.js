import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import "./css/index.css";
import Home from "./views/Home.js"

const App = function() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home /></Route>
            </Switch>
        </Router>
    )
}

export default App;