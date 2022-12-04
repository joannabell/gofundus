import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Home from './Home';
import SponsorshipCard from './SponsorshipCard';
import NavBar from './NavBar'
import SponsorsContainer from './SponsorsContainer';
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from './LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticationContext from './AuthenticationContext';



function App() {
  const [sponsors, setSponsors] = useState([]);
  const [sponsorships, setSponsorships] = useState([]);
  const [addedSponsorships, setAddedSponsorships] = useState([]);
  const [needs, setNeeds] = useState("");
  const [currentShelter, setCurrentShelter] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {

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

  const handleLogin = (user) => {
    setCurrentUser(user)
    setIsAuthenticated(true)
  }


  return (
    <AuthenticationContext.Provider value={ { currentUser, isAuthenticated } }>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sponsors" element={<SponsorsContainer sponsors={sponsors} setSponsors={setSponsors} addedSponsorships={addedSponsorships} />} />
            <Route path="/sponsorships" element={<SponsorshipCard />} />
            <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          </Routes>
        </div>
      </Router>
    </AuthenticationContext.Provider>
  );
}

export default App;

