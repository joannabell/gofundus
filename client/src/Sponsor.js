import { useEffect, useState } from "react";
import React from 'react';
import "./Sponsor.css";

export default function Sponsor({ sponsors, setSponsors }) {
    const [addedSponsorships, setAddedSponsorships] = useState([]);
    const [isAvailable, setIsAvailable] = useState({ id: "" });

    useEffect(() => {
        fetch(`http://localhost:3000/sponsor/${sponsors.id}/signups`)
            .then((data) => data.json())
            .then((sponsorship) => setAddedSponsorships(sponsorship));
    }, []);

    function handleAvailability(id) {
        fetch(`http://localhost:3000/signups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then((r) => r.json())
            .then((data) => {
                const updatedData = addedSponsorships.map((sponsorship) => {
                    if (sponsorship.id === id) {
                        sponsorship.availability = data.availability;
                        console.log("availability", sponsorship);
                        return sponsorship;
                    } else {
                        console.log(sponsorship);
                        return sponsorship;
                    }
                });
                setAddedSponsorships(updatedData);
                setIsAvailable({ id: id, isAvailable: true });
            });
    }

    function deleteSponsorships(id) {
        fetch(`http://localhost:3000/sponsorships/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => {
                const deleteSponsorship = addedSponsorships.filter(
                    (deleteSponsorship) => deleteSponsorship.id !== id
                );
                setAddedSponsorships(deleteSponsorship);
            });
    }

    function deleteSponsors(id) {
        fetch(`http://localhost:3000/sponsors/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => {
                const sponsors = sponsors.filter(
                    (deletedSponsor) => deletedSponsor.id !== id
                );
                setSponsors(sponsors)
            });
    }

    return (
        <div id="sponsor">
            <div className="delete-btn-div">
                <button className="delete-sponsor-btn" onClick={() => deleteSponsors(sponsors.id)}>
                    Delete
                </button>
            </div>
            <h2>{sponsors.name}</h2>
            <div className="added-sponsorships">
                {addedSponsorships.map((addedSponsorships) => {
                    return (
                        <div className="current-sponsorships" key={addedSponsorships.id}>
                            <button onClick={() => deleteSponsorships(addedSponsorships.id)} className="delete-btn">X</button>
                            <div className="sponsorship-title"><h3>{addedSponsorships.sponsorship.name}</h3></div>
                            <div className={(isAvailable.id === addedSponsorships.id) ? "thumbs-up" : ""}></div>
                            <img src={addedSponsorships.sponsorship.image} alt="sponsors" />
                            <div >
                                {addedSponsorships.availability != null ? <p>Availability:  <span>{availability}</span></p> : <p>I'm well taken care of, thank you!</p>}
                                <button onClick={() => handleAvailability(addedSponsorships.id)} className="sponsorship-btn">Sponsor</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}