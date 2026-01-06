import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have some styles for the Home component

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Fitness Tracker</h1>
            <p>Your personal workout tracking application.</p>
            <div className="home-buttons">
                <Link to="/login" className="btn">Login</Link>
                <Link to="/register" className="btn">Register</Link>
            </div>
        </div>
    );
};

export default Home;