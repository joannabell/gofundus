import React from 'react';
import AuthenticationContext from './AuthenticationContext';

function Profile() {
    return (
        <AuthenticationContext.Consumer>
            {({ isAuthenticated, currentUser }) => (
                <div className="profile-container">
                    <div>
                        <h2>Welcome, {currentUser.name}</h2>
                        
                    </div>
                </div>
            )}

        </AuthenticationContext.Consumer>
    )
}

export default Profile;