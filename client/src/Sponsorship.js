import React from 'react';
import "./Sponsorship.css"

export default function Sponsorship({ sponsorship, currentShelter }) {
    const { id, name, image, needs, shelter } = sponsorship
    console.log(currentShelter)

    function handleAddSponsorship() {
        fetch("http://localhost:3000/signups", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sponsorship_id: id,
                sponsor_id: id
            }),
        })
            .then((r) => r.json())
            .then((data) => console.log(data))
    }

    return (
        <div className="sponsorship-card">
            <h3>{name}</h3>
            <img src={image} alt="Sponsorship Card" />

            <div className="sponsorship-flex">
                <p>Shelter: <span>{shelter}</span></p>
                <p>Care Level: <span>{needs}</span> </p>
                <button className="button-6" onClick={() => handleAddSponsorship(name)}>+</button>
            </div>
        </div>
    )
}
