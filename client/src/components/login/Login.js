import React, { Component } from 'react';
import LoginForm from './LoginForm.js'

class Login extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4-md-offstet-4">
                    <LoginForm />
                </div>
            </div>
        )
    }
}

export default Login