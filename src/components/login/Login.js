import React, { Component } from 'react';
import axios from "axios";
import  { Container, Button, Form } from 'react-bootstrap' ;
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";


export class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            username: "",
            password: ""
        }
    }
    
    handleUsernameChange = ev => {
        this.setState({
            username: ev.target.value
        });
    }

    handlePassChange = ev => {
        this.setState({
            password: ev.target.value
        });
    }
    
    handleSubmit = ev => {
        ev.preventDefault();
        const {history} = this.props;
        const {username, password} = this.state;

        axios.post("http://34.89.93.186:8080/apiv1/login", {  
            username: username,
            password: password
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            history.push("/ads");
        })

    }

    render(){
        const { username, password } = this.state;
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <div>
                        <h2>Login</h2>
                    </div>  
                    <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            placeholder="usuario" 
                            value={username} 
                            onChange={this.handleUsernameChange} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                            required
                            type="password" 
                            placeholder="contraseña" 
                            value={password}
                            onChange={this.handlePassChange}
                         />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Login
                    </Button>
                </Form>

                <div>
                    <p>Aún no estás registrado? 
                        <Link to="/registro">Registrarse</Link>
                    </p>                    
                </div>
            </Container>
        );
    }
}

export default withRouter(Login);