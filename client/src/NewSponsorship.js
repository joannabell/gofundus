import { useState } from "react";
import React from 'react';
import "./NewSponsorship.css"

export default function NewSponsorship ({sponsorships, setSponsorships}) {
    const [ formData, setFormData ] = useState({name: "", image: "", needs: "", shelter: ""})

    const handleFormChange = (event) => {
        const name = event.target.name
        let value = event.target.value

        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/sponsorships/new", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
             body: JSON.stringify(formData),
        })
      .then((res) => res.json())
      .then((data) => {
        const newSponsorships = [...sponsorships, data];
        const sortedSponsorships = newSponsorships.sort((a,b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
        setSponsorships(sortedSponsorships);
        setFormData({name: "", image: "", needs: "", shelter: ""})
      });
  }
    
   

    return  (
        <div className="form-container" >
            <form className="sponsorship-form" onSubmit={handleSubmit} >
            <h2>Add Sponsorship</h2>
                <input  type="text" name="name" id="name" value={formData.name}  onChange={handleFormChange} placeholder="Name..."/>
                <select name="needs" value={formData.needs} onChange={handleFormChange}>
                    <option>Care Level</option>
                    <option value="low">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <select name="shelter" value={formData.shelter} onChange={handleFormChange}>
                    <option>Shelter</option>
                    <option value="Bethlehem Inn">Bethlehem Inn</option>
                    <option value="Bethlehem Inn">Bethlehem Inn</option>
                    <option value="Bethlehem Inn">Bethlehem Inn</option>
                </select>
                <input type="text" name="image" id="image" value={formData.image} onChange={handleFormChange} placeholder="Image..."/>
                <input type="submit" value="Create" id="create" />
            </form>
        </div>
    )
}