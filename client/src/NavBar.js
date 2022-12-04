import React from "react";
import { NavLink } from "react-router-dom";
import AuthenticationContext from './AuthenticationContext';
import "./NavBar.css"

function NavBar() {
    return (
        <AuthenticationContext.Consumer>
            {({currentUser, isAuthenticated}) => (
                <div className="navbar">
                    <h1><a href="http://localhost:4000/">GoFundUs</a></h1>
                    <div className="nav-links">
                    { !isAuthenticated ? 
                            <>
                                <NavLink className="link" to="/register">Register</NavLink>
                                <NavLink className="link" to="/login">Login</NavLink> 
                            </>
                            : null
                    }
                        <NavLink className="link" to="/sponsorships">Sponsorships</NavLink>
                    </div>
                </div>
            )}
            </AuthenticationContext.Consumer>

    )
}
export default NavBar