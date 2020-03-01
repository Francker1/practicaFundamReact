import React, { Component, Fragment } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import {Container} from "react-bootstrap";
import { withRouter } from "react-router-dom";
import './Ads.css';

export class Advertisments extends Component {
    constructor(props){
        super(props);
        this.state = {
            ads: []
        }
    }

    navigateToEdit = (id, name, description, price, type, photo, tags) => {
        const { history } = this.props;
        history.push({
            pathname: "/editar",
            search: `?id=${id}`,
            state: { 
                name: name,
                desc: description,
                price: price,
                type: type,
                photo: photo,
                tags: tags
            }
        });
    }

    componentDidMount = () => {
        axios.defaults.withCredentials = true;
        axios.get('http://34.89.93.186:8080/apiv1/anuncios'
        ).then(res => {
            const ads = res.data.results;
            this.setState({ ads });
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const { ads } = this.state;
        return (
            <Container>
                <Link to="/crear">Crear anuncio</Link>
                <hr></hr>
                <div className="list-ads">
                    { ads.map(ad => 
                        <Fragment key={ad._id}>
                            <Link  to={`/detail/${ad._id}`}>
                                <ul>
                                    <h4>{ad.name}</h4>
                                    <li>precio: {ad.price}</li>
                                    <li>desc: {ad.description}</li>
                                    <li>type: {ad.type}</li>
                                    <li>photo: {ad.photo}</li>
                                    <li>created: {ad.createdAt}</li>
                                    <li>updated: {ad.updatedAt}</li>
                                    <ul>tags:
                                    { ad.tags && ad.tags.map(tag => (
                                        <li key={tag}>
                                            <span>{tag}</span>
                                        </li>
                                        ))
                                    }
                                    </ul>
                                </ul>
                            </Link>
                            <button onClick={() => { this.navigateToEdit(ad._id, ad.name, ad.description, ad.price, ad.type, ad.photo, ad.tags)}}>Editar Anuncio</button>
                            <hr></hr>
                        </Fragment>
                    )}
                </div>   
            </Container>         
        )
    }
}

export default withRouter(Advertisments);