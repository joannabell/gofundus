import React from "react";
import { Card } from "semantic-ui-react";

function Sponsors({sponsors}) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Header</h1>
      {sponsors.map(sponsor => <SponsorshipCard sponsor={sponsor} key={sponsor.id} />)}
    </Card.Group>
  );
}

export default Sponsors;