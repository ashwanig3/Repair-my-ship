import React, { Component } from 'react';
import { connect } from 'react-redux'
import { userLogin } from '../actionCreator/action';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(userLogin(this.state))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-fields">
                    <p>Login Form</p>
                    <input type="text" name="username" placeholder="Username" required onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" required onChange={this.handleChange} />
                    <button className="btn" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default connect()(Login);