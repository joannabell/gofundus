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
        <div id="home-page-container">
            <h1>GoFundUs</h1>
            <img src="https://www.shutterstock.com/image-photo/donation-jar-copy-space-fundraiser-260nw-656980429.jpg" alt="A New Way To Donate" />
            <p onClick={handleEnter} id="enter-btn">Enter</p>
            <p onClick={handleLogin} id="enter-btn">Login</p>
        </div>
    )
}