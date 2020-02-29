import React, { Component } from 'react';
import Login from "../login/Login";
import Register from "../register/Register";
import Advertisments from "../ads/Ads";
import AdDetail from "../ads/AdsDetail";
import Filter from "../forms/Filters";
import AdsFiltered from "../ads/AdsFiltered";
import CreateAdForm from "../forms/CreateAd";
import EditAdForm from "../forms/EditAd";

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
                            <Link to="/registro">Registro</Link>
                        </li>
                        <li>
                            <Link to="/ads">Anuncios</Link>
                        </li>
                    </ul>
                    <hr />
                    <Switch>
                        <Route exact path="/">
                            <Front />
                        </Route>
                        <Route path="/login" component={Login} />
                        <Route path="/registro">
                            <Register />
                        </Route>
                        <Route path="/ads">
                            <Filter />
                            <Advertisments />
                        </Route>
                        <Route path={`/detail/:id`} component={AdDetail}/>
                        <Route path="/filter" component={AdsFiltered} />
                        <Route path="/crear" component={CreateAdForm} />
                        <Route path="/editar" component={EditAdForm} />
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