import React, { Component } from 'react';
import axios from "axios";
import '../routing/Rutas.css';

export default class Advertisments extends Component {

    componentDidMount(){
        axios.get("http://34.89.93.186:8080/apiv1/anuncios", {  
            withCredentials: true
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {console.log(err)})
    }
    
    render() {
        return(
            <h2>Anuncios</h2>
        );
    }
}