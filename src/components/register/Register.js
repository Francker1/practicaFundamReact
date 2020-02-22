import React, { Component } from 'react';
import  { Container, Button, Form } from 'react-bootstrap' ;

export default class Register extends Component{

    handleSubmit = e => {
        e.preventDefault();
        console.log("voy a ads");
    }

    
    render(){
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <h2>Registro</h2>
                    </div>  
                    <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" placeholder="usuario" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="contraseña" />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Registrarse
                    </Button>
                </Form>
            </Container>
        );
    }
}