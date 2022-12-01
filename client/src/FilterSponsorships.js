import React from 'react';
import "./FilterSponsorships.css"

export default function FilterSponsorships({ needs, handleNeeds }) {
    return (
        <select value={needs} onChange={handleNeeds} className="filter-sponsorship">
            <option>Filter Sponsorship Level</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </select>
    )
}