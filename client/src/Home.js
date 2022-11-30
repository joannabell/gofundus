import React from 'react';
import { useNavigate } from "react-router-dom"
import "./Home.css";

export default function Home() {
    const history = useNavigate();
    
    const handleEnter = () => {
        history.push("/sponsorships")
    }
    

    return (
            <div id="home-page-container">
                <h1>GoFundUs</h1>
                <img src="https://www.shutterstock.com/image-photo/donation-jar-copy-space-fundraiser-260nw-656980429.jpg" alt="A New Way To Donate" />
                <p onClick={handleEnter} id="enter-btn">Enter</p>
            </div>
    )
}