import React, { Component } from 'react';
import { creatAccount } from '../actionCreator/action';
import { connect } from 'react-redux';

class Signup extends Component {
    state={
        name: '',
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })    
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(creatAccount(this.state))
    }
    render() {
        return (
            <div className="signup-form">
                <form onSubmit={this.handleSubmit} className="form-fields">
                    <p>Signup Form</p>
                    <input type="text" name="name" placeholder="Your name" required onChange={this.handleChange} />
                    <input type="email" name="email" placeholder="Your email" required onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" required onChange={this.handleChange} />
                    <button className="btn" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect()(Signup);