import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Home from './Home';
import SponsorshipCard from './SponsorshipCard';
// import NavBar from './NavBar'
import SponsorsContainer from './SponsorsContainer';
import { useNavigate, BrowserRouter as Router } from "react-router-dom";
import LoginForm from './LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticationContext from './AuthenticationContext';
import Profile from './Profile'

function App() {
  const [sponsors, setSponsors] = useState([]);
  const [addedSponsorships, setAddedSponsorships] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let cookieValue = document.cookie.split('; ').find((row) => row.startsWith('current_user='))
    cookieValue = (cookieValue && cookieValue.split('=')[1]) || null
    if (!cookieValue) {
      return cookieValue;
    }
    const user = JSON.parse(decodeURIComponent(cookieValue))
    setCurrentUser(user);
    setIsAuthenticated(true);
  }, [document.cookie])

  return (
    <AuthenticationContext.Provider value={{ currentUser, isAuthenticated }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsors" element={<SponsorsContainer sponsors={sponsors} setSponsors={setSponsors} addedSponsorships={addedSponsorships} />} />
          <Route path="/sponsorships" element={<SponsorshipCard />} />
          <Route path="/login" element={<LoginForm />} />
          {/* <Route path="/register" element={<SignupForm />} /> */}
          <Route path="/me" element={<Profile me={currentUser} />} />
        </Routes>
      </div>
    </AuthenticationContext.Provider>
  );
}

export default App;

