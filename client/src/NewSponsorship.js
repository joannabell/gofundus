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
        const name = event.target.name;
        let value = event.target.value;
        document.getElementById(name).value = value;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event);
        console.log(formData);
        fetch("/sponsorships", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const newSponsorships = [...sponsorships, data];
                const sortedSponsorships = newSponsorships.sort(dynamicSort('name'))
                setSponsorships(sortedSponsorships);
                setFormData({ name: "", image: "", needs: "", shelter: "" })
            });
    }



    return (
        <div className="form-container" >
            <form className="sponsorship-form" onSubmit={handleSubmit} >
                <h2>Who would you like to sponsor?</h2>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleFormChange} placeholder="Name" />
                <input type="text" name="needs" id="needs" value={formData.needs} onChange={handleFormChange} placeholder="Needs" />
                {/* <select id="needs" name="needs" value={formData.needs} onChange={handleFormChange}>
                    <option>Needs</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select> */}
                {/* <input type="text" name="shelter" id="shelter" value={formData.shelter} onChange={handleFormChange} placeholder="Shelter" /> */}
                {/* <select id="shelter" name="shelter" value={formData.shelter} onChange={handleFormChange}>
                    <option>Shelter</option>
                    <option value="Bethlehem Inn">Bethlehem Inn</option>
                    <option value="The Lighthouse">The Lighthouse</option>
                    <option value="Shepherd's House">Shepherd's House</option>
                </select> */}
                <input type="text" name="image" id="image" value={formData.image} onChange={handleFormChange} placeholder="About" />
                <input type="submit" value="Create" id="create" />
            </form>
        </div>
    )
}