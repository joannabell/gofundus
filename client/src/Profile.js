import React, { useState, useRef, useEffect } from 'react';
import NavBar from "./NavBar"
import AuthenticationContext from './AuthenticationContext';
import "./Profile.css";
import "./Sponsorship.css";
import Sponsorship from "./Sponsorship";
import Search from "./Search";

function Profile(user) {
    // const { id, name, needs, shelter } = sponsorship
    const target = useRef(null);
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [signups, setSignups] = useState([]);

    useEffect(() => {
        fetch("/me").then((r) => r.json()).then((data) => console.log(data))
    })

    // function handleDeleteSponsorship(isAuthenticated) {

    //     if (!isAuthenticated) {
    //         setShow(true);
    //     } else {
    //         fetch("/signups", {
    //             method: "DELETE",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 sponsorship_id: id,
    //                 user_id: user.id
    //             }),
    //         })
    //             .then((r) => r.json())
    //             .then((data) => console.log(data))
    //     }
    // }

    return (
        <AuthenticationContext.Consumer>
            {({ isAuthenticated, currentUser }) => (
                <div className="profile-page">
                    <NavBar />
                    <div>
                        <h2>Welcome, {user.name}</h2>
                    </div>
                    <div>
                        <div className="sponsorship-search">
                            <Search handleSearchChange={setSearchValue} searchValue={searchValue} />
                        </div>
                    </div>
                    <div className="profile-container">
                        {/* <div className="sponsorship-card">
                            <div className="sponsorship">
                                <p>Shelter: <span>{shelter}</span></p>
                                <p>Needs: <span>{needs}</span> </p>
                                <button ref={target} className="button-6" onClick={() => handleDeleteSponsorship(isAuthenticated)}>-</button>
                            </div>
                        </div> */}
                    </div>
                </div>
            )}
        </AuthenticationContext.Consumer>
    );
}

export default Profile;