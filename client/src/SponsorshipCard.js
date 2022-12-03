import React from 'react';
import { useState } from "react"
import "./SponsorshipCard.css";
import Sponsorship from "./Sponsorship";
import Search from "./Search";
import NewSponsorship from "./NewSponsorship";
import FilterSponsorships from "./FilterSponsorships";

export default function SponsorshipCard({ searchedSponsorships, sponsorships, setSponsorships, handleSearchChange, searchValue, currentShelter, handleSponsorChange, needs, handleNeeds }) {
    const [showForm, setShowForm] = useState(false)

    console.log(sponsorships)

    return (
        <>
            <div className="sponsorship-page">

                <div className="sponsorship-fx">
                    <div className="sponsorship-fx-left">
                        <Search handleSearchChange={handleSearchChange} searchValue={searchValue} />

                    </div>
                    <div className="sponsorship-fx-right">
                        <FilterSponsorships needs={needs} handleNeeds={handleNeeds} />
                        <Sponsorship sponsorships={sponsorships} currentShelter={currentShelter} handleSponsorChange={handleSponsorChange} />
                    </div>
                </div>

            </div>

            {showForm ?
                <div className="new-sponsorship-form">
                    <NewSponsorship sponsorships={sponsorships} setSponsorships={setSponsorships} />
                </div>
                :
                <div className="show-form-div">
                    <button className="add-sponsorship-btn" onClick={() => setShowForm(true)}>Add Someone to Sponsor</button>
                </div>
            }

        </>
    )
}