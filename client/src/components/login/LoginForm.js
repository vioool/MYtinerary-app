import React, { Component } from "react";

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        //this going to pass to other function that makes ajax request to the server
        console.log(this.state);
    }

    render() {
        return (
            <div id="index">
                <div className="card">
                    <h3>Login</h3>
                    <form className="box" onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <button className="btn waves-effect waves-light red accent-3" type="submit" name="action">
                                <i className="fab fa-google-plus-g"></i>
                            </button>
                        </div>
                        
                        <div>
                            <p>- or -</p>
                        </div>

                        <div className="form-group">
                            <label className="control-label">Email</label>
                            <input
                                className="form-control"
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="control-label">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn waves-effect waves-light red accent-3" type="submit" name="action">
                                Login
                            <i className="material-icons right">send</i>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm
