import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <nav>
                    <div>
                        <Link to="/signup"><button className="btn">Signup</button></Link>
                        <Link to="/login"><button className="btn">Login</button></Link>
                    </div>
                </nav>
                <div className="hero-section">
                    <h1>Repair Your Relationship</h1>
                    <Link to="/signup"><button className="btn">Get Start</button></Link>
                </div>
            </div>
        );
    }
}

export default Dashboard;