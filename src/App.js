import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalState from "./context/GlobalState";
import ValidationForm from "./components/ValidationForm";
import Dashboard from "./components/Dashboard";
import RequiredAuth from "./components/Auth/RequiredAuth";
import Navbar from "./components/utils/Navbar";

function App() {
    return (
        <GlobalState>
            <Router>
				<Navbar />
                <Switch>
                    <Route
                        component={RequiredAuth(ValidationForm)}
                        exact
                        path="/"
                    />
                    <Route component={RequiredAuth(Dashboard)} path="/main" />
                </Switch>
            </Router>
        </GlobalState>
    );
}

export default App;
