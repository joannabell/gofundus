import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Home from './Home';
import SponsorshipCard from './SponsorshipCard';
import NavBar from './NavBar'
import SponsorsContainer from './SponsorsContainer';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [sponsors, setSponsors] = useState([]);
  const [sponsorships, setSponsorships] = useState([]);
  const [addedSponsorships, setAddedSponsorships] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [needs, setNeeds] = useState("");
  const [currentShelter, setCurrentShelter] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });

    fetch("/sponsors")
      .then(data => data.json())
      .then(sponsors => { setSponsors(sponsors) })

    fetch("/sponsorships")
      .then(data => data.json())
      .then(sponsorships => setSponsorships(sponsorships))

    fetch("/signups")
      .then(data => data.json())
      .then(signups => setAddedSponsorships(signups))
  }, [])

  // if (!isAuthenticated) {
  //   return <div></div>;
  // }

  // // search sponsorships
  // function handleSearchChange(event) {
  //   setSearchValue(event.target.value)
  // }
  // const searchedSponsorships = sponsorships.filter((sponsorship) => {
  //   console.log(sponsorship)
  //   const sponsorshipName = sponsorship.name.toLowerCase()
  //   const search = searchValue.toLowerCase()
  //   if (needs === "Low") {
  //     return sponsorship.needs === "low" && sponsorshipName.includes(search)
  //   }
  //   if (needs === "Medium") {
  //     return sponsorship.needs === "medium" && sponsorshipName.includes(search)
  //   }
  //   if (needs === "High") {
  //     return sponsorship.needs === "high" && sponsorshipName.includes(search)
  //   }
  //   return sponsorshipName.includes(search)
  // })


  // choose needs level dropdown
  function handleNeeds(event) {
    setNeeds(event.target.value)
  }

  // choose city dropdown
  function handleShelterChange(event) {
    setCurrentShelter(event.target.value)
  }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<SponsorsContainer sponsors={sponsors} setSponsors={setSponsors} addedSponsorships={addedSponsorships} />} />
          <Route path="/sponsorships" element={<SponsorshipCard
            // searchedSponsorships={searchedSponsorships}
            sponsorships={sponsorships}
            setSponsorships={setSponsorships}
            // handleSearchChange={handleSearchChange}
            searchValue={searchValue}
            sponsors={sponsors}
            needs={needs}
            handleNeeds={handleNeeds}
            currentShelter={currentShelter}
            handleShelterChange={handleShelterChange}
          />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


