import React, { Component } from 'react';
import axios from "axios";
import {Container, Card, Row, Col} from "react-bootstrap";

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
            this.setState({ adsF });
        }).catch(err => {console.log(err)})

    }

    Back = () => {
        const {history} = this.props;
        history.goBack();
    }

    render(){
        const { adsF } = this.state;
        return (

            <Container>
            <Row>
                <Col>
                    <button onClick={this.Back}>Volver</button>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                { adsF.map(ad => 
                    <Col key={ad._id} className="col-12 col-sm-6 col-lg-4 mb-4" >
                        <Card onClick={() => {this.navigateToDetail(ad._id)}}>
                            <Card.Img className="img-card" variant="top" src={ad.photo} />
                            <Card.Body>
                                <Card.Title>{ad.name}</Card.Title>
                                <Card.Text as={"div"}>
                                    <dl>
                                        <dt>Precio: {ad.price} €</dt>

                                        <dt>Desc:</dt>
                                        <dd>{ad.description}</dd>

                                        <dt>Tipo:</dt>
                                        <dd>{ad.type}</dd>

                                        <dt>Tags:</dt>
                                        { ad.tags && ad.tags.map(tag => (
                                            <dd key={tag}>
                                                {tag}
                                            </dd>
                                        ))
                                        }

                                        <dt>created:</dt>
                                        <dd>created: {ad.createdAt}</dd>
                                    </dl>
                                </Card.Text>
                                <Card.Footer>
                                    <small className="text-muted">Última actualización: {ad.updatedAt}</small>
                                </Card.Footer>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                )}          
            </Row>
        </Container>    
 
        )

    }
}

/**
 * 
 <Container>
                <Row>
                    <Col>
                        <Link className="create-link" to="/crear">Crear anuncio</Link>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    { ads.map(ad => 
                        <Col key={ad._id} className="col-12 col-sm-6 col-lg-4 mb-4" >
                            <Card onClick={() => {this.navigateToDetail(ad._id)}}>
                                <Card.Img className="img-card" variant="top" src={ad.photo} />
                                <Card.Body>
                                    <Card.Title>{ad.name}</Card.Title>
                                    <Card.Text>
                                        <dl>
                                            <dt>Precio: {ad.price} €</dt>

                                            <dt>Desc:</dt>
                                            <dd>{ad.description}</dd>

                                            <dt>Tipo:</dt>
                                            <dd>{ad.type}</dd>

                                            <dt>Tags:</dt>
                                            { ad.tags && ad.tags.map(tag => (
                                                <dd key={tag}>
                                                    {tag}
                                                </dd>
                                            ))
                                            }

                                            <dt>created:</dt>
                                            <dd>created: {ad.createdAt}</dd>
                                        </dl>
                                    </Card.Text>
                                    <Card.Footer>
                                        <small className="text-muted">Última actualización: {ad.updatedAt}</small>
                                    </Card.Footer>
                                </Card.Body>
                                
                            </Card>

                            <button className="btn-edit" onClick={() => { this.navigateToEdit(ad._id, ad.name, ad.description, ad.price, ad.type, ad.photo, ad.tags)}}>Editar Anuncio</button>
                        </Col>
                    )}          
                </Row>
            </Container>    


 */