import React, { Component } from 'react';
import Login from "../login/Login";
import Register from "../register/Register";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Home extends Component {
    render(){
        return (
            <Router>
                <div>
                    <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact path="/">
                            <Front />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

function Front() {
    return (
        <div>
        <h2>Home</h2>
        </div>
    );
}