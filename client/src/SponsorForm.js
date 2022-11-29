import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function SponsorForm({addNewSponsor}) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let newSponsor = {
      name: name,
      email: email,
    }
    fetch("/sponsors", {
      method: 'POST',
      headers: {"Content-Type" : "application/json", 
    },
      body: JSON.stringify(newSponsor)
    })
      .then(resp => resp.json())
      .then(addNewSponsor(newSponsor))
  }

  return (
    <div>
      <h3>Become a Sponsor</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          <Form.Input fluid label="Email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default SponsorForm;