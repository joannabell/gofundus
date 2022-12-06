import { useEffect, useState } from "react";
import React from 'react';
import "./Sponsor.css";
import AuthenticationContext from './AuthenticationContext';

export default function Sponsor({ sponsor, setSponsors }) {
    const [addedSponsorships, setAddedSponsorships] = useState([]);
    const [isAvailable, setIsAvailable] = useState({ id: "" });

    useEffect(() => {
        fetch(`/sponsors/${sponsor.id}`)
            .then((data) => data.json())
            .then((sponsor) => setAddedSponsorships(sponsor.sponsorships));
    }, []);

    // function deleteSponsors(id) {
    //     fetch(`/sponsors/${id}`, {
    //         method: "DELETE",
    //     })
    //         .then((res) => res.json())
    //         .then(() => {
    //             const sponsor = sponsor.filter(
    //                 (deletedSponsor) => deletedSponsor.id !== id
    //             );
    //             setSponsors(sponsor)
    //         });
    // }

    function handleAvailability(id) {
        fetch(`/signups/${id}`, {
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
        fetch(`/sponsorships/${id}`, {
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

    return (
        <div id="sponsor">
            {/* <div className="delete-btn-div">
                <button className="delete-sponsor-btn" onClick={() => deleteSponsors(sponsor.id)}>
                    Delete
                </button>
            </div> */}
            {/* {mapSponsorships} */}
            <h2>{sponsor.name}</h2>
            <div className="added-sponsorships">
                {addedSponsorships.map((addedSponsorship) => {
                    return (
                        <div className="current-sponsorships" key={addedSponsorship.id}>
                            <button onClick={() => deleteSponsorships(addedSponsorship.id)} className="delete-btn">X</button>
                            <div className="sponsorship-title"><h3>{addedSponsorship.name}</h3></div>
                            <div className={(isAvailable.id === addedSponsorship.id) ? "thumbs-up" : ""}></div>
                            <img src={addedSponsorship.image} alt="sponsors" />
                            <div >
                                {addedSponsorship.availability != null ? <p>Availability:  <span>{addedSponsorship.availability}</span></p> : <p>I'm well taken care of, thank you!</p>}
                                <button onClick={() => handleAvailability(addedSponsorship.id)} className="sponsorship-btn">Sponsor</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}