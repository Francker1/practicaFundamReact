import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './Ads.css';

export default class Advertisments extends Component {
    constructor(props){
        super(props);
        this.state = {
            ads: []
        }
    }

    componentDidMount = () => {
        axios.defaults.withCredentials = true;
        axios.get('http://34.89.93.186:8080/apiv1/anuncios'
        ).then(res => {
            const ads = res.data.results;
            //console.log(ads);
            this.setState({ ads });
        }).catch(err => {console.log(err)})
    }

    render() {
        const { ads } = this.state;
        return (

            <div className="list-ads">
                { ads.map(ad => 
                    <Link key={ad._id} to={`/detail/${ad._id}`}>
                        <ul>
                            <h4>{ad.name}</h4>
                            <li>precio: {ad.price}</li>
                            <li>desc: {ad.description}</li>
                            <li>type: {ad.type}</li>
                            <li>photo: {ad.photo}</li>
                            <li>created: {ad.createdAt}</li>
                            <li>updated: {ad.updatedAt}</li>
                            <li>tags: {ad.tags.map(tag => `${tag}, `)}</li>
                        </ul>
                    </Link>
                )}
            </div>            
        )
    }
}