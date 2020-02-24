import React, { Component } from 'react';
import { Container, Row, Button, Form, Col } from "react-bootstrap";

export default class Filter extends Component{
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
                            <Form.Control type="text" placeholder="busca por texto"/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Etiquetas</Form.Label>
                            <Form.Control as="select" value="Tags">
                                <option>Tags...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Precio mín.</Form.Label>
                            <Form.Control as="select" value="0">
                                <option>0</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Precio máx.</Form.Label>
                            <Form.Control as="select" value="0">
                                <option>0</option>
                                <option>5</option>
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
                                label="Venta"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                />
                            <Form.Check
                                custom
                                inline
                                type="radio"
                                label="Compra"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="info" type="submit" size="lg" className="col my-4">
                        Filtrar
                    </Button>
                </Form>
                <hr/>
            </Container>
            
        );
    }
}