import { useState } from "react";
import React from 'react';
import "./NewSponsor.css"

export default function NewSponsor({ sponsors, setSponsors }) {
    const [formData, setFormData] = useState({ name: "", email: "" })

    const handleFormChange = (event) => {
        const name = event.target.name
        let value = event.target.value

        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:9292/sponsors/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                const newSponsors = [...sponsors, data];
                const sortedSponsors = newSponsors.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
                setSponsors(sortedSponsors);
                setFormData({ name: "", email: "" })
            });
    }



    return (
        <div className="form-container" >
            <form className="sponsor-form" onSubmit={handleSubmit} >
                <h2>Sign Up to Sponsor With Us</h2>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleFormChange} placeholder="Name..." />
                <input type="text" name="email" id="email" value={formData.email} onChange={handleFormChange} placeholder="Image..." />
                <input type="submit" value="Create" id="create" />
            </form>
        </div>
    )
}