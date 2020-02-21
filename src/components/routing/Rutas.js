import React, { Component } from 'react';
import Dashboard from "../ads/Ads";
import Register from "../register/Register";
import Login from "../login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Rutas.css';


const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>login!</div>,
    main: () => <Login/>
  },
  {
    path: "/login",
    sidebar: () => false,
    main: () => <Login/>
  },
  {
    path: "/register",
    sidebar: () => <div>register!</div>,
    main: () => <Register/>
  },
  {
    path: "/anuncios",
    sidebar: () => <div>advertisments!</div>,
    main: () => <Dashboard/>
  }
];

export default class Rutas extends Component{
  render(){
    return(
      <Router>
        <div style={{ display: "flex" }}>
          <div className="RutasContainer">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/anuncios">Anuncios</Link>
              </li>
            </ul>

            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}