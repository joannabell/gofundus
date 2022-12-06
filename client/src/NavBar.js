import React from "react";
import { NavLink } from "react-router-dom";
import AuthenticationContext from './AuthenticationContext';
import "./NavBar.css";
import logo from "./assets/logo.jpg";

function NavBar() {
    return (
        <AuthenticationContext.Consumer>
            {({ currentUser, isAuthenticated }) => (
                <div className="navbar">
                    <NavLink to="/">
                        <button>
                            <img className="img-responsive" src={logo} alt="logo" />
                        </button>
                    </NavLink>
                    <div className="nav-links">
                        {!isAuthenticated ?
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