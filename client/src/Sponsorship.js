import React, { useState, useRef } from 'react';
import { Tooltip, Overlay } from 'react-bootstrap';
import AuthenticationContext from './AuthenticationContext';
import "./Sponsorship.css"

export default function Sponsorship({ sponsorship, currentShelter }) {
    const { id, name, image, needs, shelter } = sponsorship
    const target = useRef(null);
    const [show, setShow] = useState(false);

    function handleAddSponsorship(isAuthenticated) {
        if (!isAuthenticated) {
            setShow(true);
        } else {
            fetch("/signups", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sponsorship_id: id,
                    user_id: id
                }),
            })
                .then((r) => r.json())
                .then((data) => console.log(data))
        }
    }

    return (
        <AuthenticationContext.Consumer>
            {({ isAuthenticated }) => (
                <div className="sponsorship-card">
                    <h3>{name}</h3>
                    <img src={image} alt="Sponsorship Card" />

                    <div className="sponsorship-flex">
                        <p>Shelter: <span>{shelter}</span></p>
                        <p>Needs: <span>{needs}</span> </p>
                        <button ref={target} className="button-6" onClick={() => handleAddSponsorship(isAuthenticated)}>+</button>
                        { show ?
                        <Overlay target={target.current} show={show} placement="right">
                            {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                    Please Login
                                </Tooltip>
                            )}
                        </Overlay>
                        : null } 
                        }
                    </div>
                </div>
        )}
        </AuthenticationContext.Consumer>
    )
}