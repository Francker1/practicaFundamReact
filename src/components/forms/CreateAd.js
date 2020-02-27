import React, {Component} from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { TagsList } from "../../services/constants/ads-data";
import axios from "axios";

export default class CreateAdForm extends Component{

    state = {
        name: "",
        photo: "",
        description: "",
        tags: [],
        price: "",
        type: ""
    }
    
    handleChangeName           = ev => this.setState({ name: ev.target.value });
    handleChangePhoto          = ev => this.setState({ photo: ev.target.value });
    handleChangeDescription    = ev => this.setState({ description: ev.target.value });
    handleChangeTag            = ev => this.setState({ tags: ev.target.value });
    handleChangePrice          = ev => this.setState({ price: ev.target.value});
    handleChangeType           = ev => this.setState({ type: ev.target.value });

    handleSubmit = ev => {
        ev.preventDefault();

        axios.defaults.withCredentials = true;
        axios.post('http://34.89.93.186:8080/apiv1/anuncios', { 
            name: this.state.name,
            photo: this.state.photo,
            description: this.state.description,
            tags: [this.state.tags],
            price: parseInt(this.state.price),
            type: this.state.type
         }
        ).then(res => {
            console.log(res);
        }).catch(err => {console.log(err)})

    }


    render(){
        return(
            <Container>
                <Row>
                <Col className="mb-4"><h4>Crear anuncio</h4></Col>
                </Row>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Título anuncio</Form.Label>
                            <Form.Control 
                                name="name" 
                                type="text" 
                                placeholder="¿Qué vas a vender?" 
                                onChange={this.handleChangeName}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>URL imagen</Form.Label>
                            <Form.Control 
                                name="photo" 
                                type="text" 
                                placeholder="Url de la imagen" 
                                onChange={this.handleChangePhoto}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Descripción anuncio</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows="4" 
                                maxLength="240" 
                                name="description"
                                placeholder="Descríbelo un poco"
                                onChange={this.handleChangeDescription}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Etiquetas</Form.Label>
                            <Form.Control 
                                name="tags" 
                                as="select" 
                                multiple
                                onChange={this.handleChangeTag}
                            >
                                <TagsList />
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control 
                                name="price" 
                                type="number" 
                                min="0"
                                placeholder="¿Por cuánto lo vendes?" 
                                onChange={this.handleChangePrice}
                            />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label as="legend" column>
                                Tipo
                            </Form.Label>
                            <Form.Check
                                custom
                                inline
                                type="radio"
                                name="type"
                                label="Venta"
                                value="sell"
                                id="venta"
                                required
                                onChange={this.handleChangeType}
                                />
                            <Form.Check
                                custom
                                inline
                                type="radio"
                                name="type"
                                label="Compra"
                                value="buy"                                
                                id="buy"
                                required
                                onChange={this.handleChangeType}
                                />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="info" type="submit" size="lg" className="col my-4">
                        Crear
                    </Button>

                </Form>
                <hr/>
            </Container>    
        );
    }
}