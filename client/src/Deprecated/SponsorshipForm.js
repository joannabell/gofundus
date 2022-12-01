import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function SponsorshipForm({ addNewSponsorship }) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    let newSponsorship = {
      name: name,
      description: description,
      image: image
    }
    fetch("/sponsorships", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSponsorship)
    })
      .then(resp => resp.json())
      .then(addNewSponsorship(newSponsorship))
  }

  return (
    <div>
      <h3>Add a Sponsorship</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <Form.Input fluid label="Description" placeholder="Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Form.Input fluid label="Image" placeholder="Image" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default SponsorshipForm;