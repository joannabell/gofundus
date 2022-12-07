import { useState } from "react";
import React from 'react';
import "./NewSponsorship.css"

function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export default function NewSponsorship({ sponsorships, setSponsorships }) {
    const [formData, setFormData] = useState({ name: "", image: "", needs: "", shelter: "" })

    const handleFormChange = (event) => {
        const name = event.target.name
        let value = event.target.value

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("/sponsorships", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {

                const newSponsorships = [...sponsorships, data];
                console.log(newSponsorships)
                const sortedSponsorships = newSponsorships.sort(dynamicSort('name'))
                setSponsorships(sortedSponsorships);
                setFormData({ name: "", image: "", needs: "", shelter: "" })
            });
    }



    return (
        <div className="form-container" >
            <form className="sponsorship-form" onSubmit={handleSubmit} >
                <h2>Who would you like to sponsor?</h2>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleFormChange} placeholder="Name..." />
                <select name="needs" value={formData.needs} onChange={handleFormChange}>
                    <option>Needs</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <select name="shelter" value={formData.shelter} onChange={handleFormChange}>
                    <option>Shelter</option>
                    <option value="Bethlehem Inn">Bethlehem Inn</option>
                    <option value="Bethlehem Inn">The Lighthouse</option>
                    <option value="Bethlehem Inn">Shepherd's House</option>
                </select>
                <input type="text" name="image" id="image" value={formData.image} onChange={handleFormChange} placeholder="Image..." />
                <input type="submit" value="Create" id="create" />
            </form>
        </div>
    )
}