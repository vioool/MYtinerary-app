import React, { Component } from 'react';
// import {NavLink} from 'react-router-dom';

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

                    <div className="box">
                        <a href="http://localhost:4000/api/auth/google">
                        <button className="btn waves-effect waves-light red accent-3" type="submit" name="action">login with
                            <i className="fab fa-google-plus-g right"></i>
                            </button>
                            </a>
                       {/* <NavLink to='/api/auth/google'> 
                            <button className="btn waves-effect waves-light red accent-3" type="submit" name="action">login with
                            <i className="fab fa-google-plus-g right"></i>
                            </button>
                        </NavLink> */}
                    </div>

                    <form className="box" onSubmit={this.onSubmit}>
                        {/* <p>- or -</p> */}
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
