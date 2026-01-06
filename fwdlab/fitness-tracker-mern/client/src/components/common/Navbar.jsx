import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have some styles for the Navbar

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Fitness Tracker</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;