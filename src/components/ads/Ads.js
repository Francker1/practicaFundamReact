import React, { Component } from 'react';
import axios from "axios";
import '../routing/Rutas.css';

export default class Advertisments extends Component {
    constructor(props){
        super(props);
        this.state = {
            ads: []
        }
    }

    componentDidMount = () => {
        axios.defaults.withCredentials = true;
        axios.get('http://34.89.93.186:8080/apiv1/anuncios')
            .then(res => {
            const ads = res.data.results;
            console.log(ads);
            this.setState({ ads });
        })
    }

    render() {
        const { ads } = this.state;
        return (
            <ul>
                { ads.map(ad => <li key={ad._id}>{ad.name}</li>)}
            </ul>
        )
    }
}