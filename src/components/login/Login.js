import React, { Component } from 'react';
import  { Container, Button, Form } from 'react-bootstrap' ;
import { Link } from "react-router-dom";


export default class Login extends Component{

    handleSubmit = e => {
        e.preventDefault();
        console.log("voy a ads");
    }

    render(){
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <h2>Login</h2>
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
                        Login
                    </Button>
                </Form>

                <div>
                    <p>Aún no estás registrado? 
                        <Link to="/register">Registrarse</Link>
                    </p>                    
                </div>
            </Container>
        );
    }
}