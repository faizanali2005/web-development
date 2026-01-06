import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import './Profile.css';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="profile-container">
            <h1>User Profile</h1>
            {user ? (
                <div className="profile-details">
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default Profile;