import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import "./css/index.css"
import Home from "./views/Home.js"
import Vastgoed from "./views/Vastgoed.js"

const App = function() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/gsv"><Vastgoed /></Route>
            </Switch>
        </Router>
    )
}

export default App;