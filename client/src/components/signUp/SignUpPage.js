import React, { Component } from "react";
import SignupForm from './SignUpForm'

class SignUpPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4-md-offstet-4">
                    <SignupForm />
                </div>
            </div>
        )
    }
}

export default SignUpPage
