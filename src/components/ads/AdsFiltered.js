import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './Ads.css';


export default class AdsFiltered extends Component {

    constructor(props){
        super(props);
        this.state = {
            adsF: []
        }
    }

    componentDidMount = () => {

    const params = new URLSearchParams(window.location.search);

    const adName = (params.get("name")) ? `name=${params.get("name")}` : "" ;
    const adVenta = (params.get("venta")) ? `venta=${params.get("venta")}` : "" ;
    const adTag = (params.get("tag")) ? `tag=${params.get("tag")}` : "" ;
    const adPrice = (params.get("pricemin")) || (params.get("pricemax")) ? `price=${params.get("pricemin")}-${params.get("pricemax")}` : "";

    axios.defaults.withCredentials = true;

    
    axios.get(`http://34.89.93.186:8080/apiv1/anuncios?${adName}&${adVenta}&${adTag}&${adPrice}`
    ).then(res => {
        const adsF = res.data.results;
        //console.log(adsF);
        this.setState({ adsF });
    }).catch(err => {console.log(err)})

    }

    render(){
        const { adsF } = this.state;
        return (

            <div className="list-ads">
                { adsF.map(ad => 
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