import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('login')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-fields">
                    <p>Login Form</p>
                    <input type="email" name="email" placeholder="Your email" required onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" required onChange={this.handleChange} />
                    <button className="btn" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;