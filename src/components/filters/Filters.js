import React, { Component } from 'react';
import { Container, Row, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

  
export default class Filter extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            tag: "",
            min: "",
            max: "",
            type: "true"
        }
    }

    handleChangeName    = ev => this.setState({ name: ev.target.value });
    handleChangeTag     = ev => this.setState({ tag: ev.target.value });
    handleChangeMin     = ev => this.setState({ min: ev.target.value});
    handleChangeMax     = ev => this.setState({ max: ev.target.value });
    handleChangeType    = ev => this.setState({ type: ev.target.value });

    render(){
        return(
            <Container>
                <Row>
                <Col className="mb-4"><h4>Filtrar anuncios</h4></Col>
                </Row>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>¿Qué estas buscando?</Form.Label>
                            <Form.Control name="name" type="text" placeholder="busca por texto" onChange={this.handleChangeName}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Etiquetas</Form.Label>
                            <Form.Control name="tag" as="select" onChange={this.handleChangeTag}>
                                <option>Selecciona un tag</option>
                                <option>work</option>
                                <option>lifestyle</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Precio mín.</Form.Label>
                            <Form.Control as="select" onChange={this.handleChangeMin}>
                                <option>0</option>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Precio máx.</Form.Label>
                            <Form.Control as="select" onChange={this.handleChangeMax}>
                                <option>0</option>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label as="legend" column>
                                Tipo
                            </Form.Label>
                            <Form.Check
                                custom
                                inline
                                type="radio"
                                name="tipo"
                                label="Venta"
                                value="true"
                                id="venta"
                                checked = {this.state.type === "true"}
                                onChange={this.handleChangeType}
                                />
                            <Form.Check
                                custom
                                inline
                                type="radio"
                                label="Compra"
                                value="false"
                                name="tipo"
                                id="compra"
                                checked = {this.state.type === "false"}
                                onChange={this.handleChangeType}
                                />
                        </Form.Group>
                    </Form.Row>

                    <Link to={{ pathname: "/filter", search: `?name=${this.state.name}&venta=${this.state.type}&tag=${this.state.tag}&price=${this.state.min}-${this.state.max}` }}>Filtrar</Link>
                </Form>
                <hr/>

            </Container>

            
            
        );
    }
}