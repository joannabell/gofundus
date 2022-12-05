import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
    const navigate = useNavigate();

    const handleEnter = () => {
        navigate("/sponsorships")
    }

    const handleLogin = () => {
        navigate("login")
    }


    return (
        <div id="body">
            <div id="home-page-container">
                <h1>GoFundUs</h1>
                <img src="" />
                <p onClick={handleEnter} id="enter-btn">enter</p>
                <p onClick={handleLogin} id="enter-btn">login</p>
            </div>
        </div>
    )
}