// this is the parent component
import "./App.css";
import React, { useState, useEffect } from "react";
import Sponsorships from "./Sponsorships.js";
import SponsorshipForm from "./SponsorshipForm";
import Search from "./Search";
// import Header from "./Header";

function Home() {
  const [sponsorships, setSponsorships] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("/sponsorships")
      .then(resp => resp.json())
      .then(setSponsorships)
  }, [])

  const filteredSponsorships = sponsorships.filter(sponsorship => sponsorship.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const addNewSponsorship = (newSponsorship) => {
    setSponsorships([...sponsorships, newSponsorship])
  }

  return (
    <>
      <div className="App">
        {/* <div className="App-header">
          <Header />
        </div> */}
        <br />
        <SponsorshipForm addNewSponsorship={addNewSponsorship} />
        <br />
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <br />
        <Sponsorships sponsorship={filteredSponsorships} />
      </div>
    </>
  );
}

export default Home;