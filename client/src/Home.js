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
                <p onClick={handleEnter} id="enter-btn">enter</p>
                <p onClick={handleLogin} id="enter-btn">login</p>
            </div>
            <div id="home-page-about-us-container">
                <span>
                    <h1>Make a difference by sponsoring homeless people</h1>
                    <h2>The fast and easy way to give money directly to people in need by cutting out the middle man.
                    </h2>
                    <h4><a href="/sponsorships">START SPONSORING SOMEONE TODAY</a></h4>
                </span>
            </div>
        </div>
    )
}