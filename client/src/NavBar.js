import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <h1>GoFundUs</h1>
            <div className="nav-links">
                <NavLink className="link" to="/sponsors">Sponsors</NavLink>
                <NavLink className="link" to="/sponsorships">Sponsorships</NavLink>
            </div>
           
        </div>
      )}
export default NavBar