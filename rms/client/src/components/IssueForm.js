import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postIssue } from '../actionCreator/action';

class IssueForm extends Component {
    state = {
        issue: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(postIssue({
            issue: this.state.issue,
            userId: this.props.match.params.userId
        }))
    }
    render() {
        const { user } = this.props;
        return (
            <div className="form-container">
                <div className="top-nav">
                    <span className="profile">{user.name}</span>
                </div>
                <h1>Never Lose Hope</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea placeholder='Raise Your Issue Here:' onChange={this.handleChange} id="issue" name="issue"
                     rows="15" cols="50"></textarea>
                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
}

export default connect(mapStateToProps)(IssueForm);