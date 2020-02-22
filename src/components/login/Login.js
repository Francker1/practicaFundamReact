import React, { Component } from 'react';

export default class Login extends Component{
    render(){
        return(
            <>
            <div>
                <h2>Login</h2>
            </div>  
            <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Pass:
                    <input type="password" name="name" />
                </label>
                <input type="submit" value="Submit" />
                </form>
            </div>
            </>
        );
    }
}