import React from 'react';
import { useState, useEffect } from "react"
import "./SponsorshipCard.css";
import Sponsorship from "./Sponsorship";
import Search from "./Search";
import NewSponsorship from "./NewSponsorship";
import NavBar from "./NavBar"
// import FilterSponsorships from "./FilterSponsorships";

export default function SponsorshipCard() {
    const [showForm, setShowForm] = useState(false)
    const [sponsorships, setSponsorships] = useState([])
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        fetch("/sponsorships")
            .then(data => data.json())
            .then(sponsorships => setSponsorships(sponsorships))
    }, [])

    console.log(sponsorships)

    return (
        <>
            <div className="sponsorship-page">
                <NavBar />

                <div className="sponsorship-fx">
                    <div className="sponsorship-fx-left">
                        <Search handleSearchChange={setSearchValue} searchValue={searchValue} />
                    </div>
                    <div className="sponsorship-fx-right">
                        {sponsorships.filter(s => {
                            return s.name.toLowerCase().includes(searchValue.toLowerCase());
                        }).map(s => <Sponsorship sponsorship={s} key={s.id}></Sponsorship>)}

                        {/* <Sponsorship sponsorships={sponsorships} currentShelter={currentShelter} handleSponsorChange={handleSponsorChange} />*/}
                    </div>
                </div>


            </div>

            {showForm ?
                <div className="new-sponsorship-form">
                    <NewSponsorship sponsorships={sponsorships} setSponsorships={setSponsorships} />
                </div>
                :
                <div className="show-form-div">
                    <button className="add-sponsorship-btn" onClick={() => setShowForm(true)}>Add a Sponsorship</button>
                </div>
            }

        </>
    )
}