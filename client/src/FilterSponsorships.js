import React from 'react';
import "./FilterSponsorships.css"

export default function FilterSponsorships({ careLevel, handleCareLevel }) {
    return (
        <select value={careLevel} onChange={handleCareLevel} className="filter-sponsorship">
            <option>Filter Sponsorship Level</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </select>
    )
}