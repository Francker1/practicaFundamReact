import React, { Component } from 'react';
import axios from "axios";
import '../routing/Rutas.css';

export default class Advertisments extends Component {
    state = {
        ads: []
      }
    
      componentDidMount() {
        axios.get("http://34.89.93.186:8080/apiv1/anuncios",{withCredentials:true})
          .then(res => {
            const ads = res.data;
            this.setState({ ads });
          })
        //console.log("a ver k pasa");
      }
    
      render() {
        return (
          <ul>
            { this.state.ads.map(ad => <li>{ad.name}</li>)}
          </ul>
        )
      }
}