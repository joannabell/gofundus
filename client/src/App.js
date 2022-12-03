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
            sponsorships={sponsorships}
            setSponsorships={setSponsorships}
            sponsors={sponsors}
            setSponsors
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


