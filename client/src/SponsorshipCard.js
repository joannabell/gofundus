import React from 'react';
import { useState } from "react"
import "./SponsorshipCard.css";
import Sponsorship from "./Sponsorship";
import Search from "./Search";
import NewSponsorship from "./NewSponsorship";
import FilterSponsorships from "./FilterSponsorships";

export default function SponsorshipCard({ searchedSponsorships, sponsorships, setSponsorships, handleSearchChange, searchValue, currentShelter, handleSponsorChange, careLevel, handleCareLevel }) {
    const [showForm, setShowForm] = useState(false)

    return (
        <>
            <div className="sponsorship-page">

                <div className="sponsorship-fx">
                    <div className="sponsorship-fx-left">
                        <Search handleSearchChange={handleSearchChange} searchValue={searchValue} />

                    </div>
                    <div className="sponsorship-fx-right">
                        <FilterSponsorships careLevel={careLevel} handleCareLevel={handleCareLevel} />
                        <Sponsorship sponsorships={sponsorships} currentShelter={currentShelter} handleSponsorChange={handleSponsorChange} />
                    </div>

                </div>
                <div className="sponsorship-list">
                    {searchedSponsorships.map((sponsorship) => <Sponsorship key={sponsorship.id} sponsorship={sponsorship} />)}
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