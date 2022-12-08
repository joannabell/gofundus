import React, { useState, useRef } from 'react';
import { Tooltip, Overlay } from 'react-bootstrap';
import AuthenticationContext from './AuthenticationContext';
import "./Sponsorship.css"

export default function Sponsorship({ sponsorship, currentShelter }) {
    const { id, name, image, needs, shelter } = sponsorship
    const target = useRef(null);
    const [show, setShow] = useState(false);

    function handleAddSponsorship(currentUser) {
        if (!currentUser) {
            setShow(true);
        } else {
            fetch("/signups", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sponsorship_id: id,
                    user_id: currentUser.id
                }),
            })
                .then((r) => r.json())
                .then((data) => console.log(data))
        }
    }

    return (
        <AuthenticationContext.Consumer>
            {({ currentUser }) => (
                <div className="sponsorship-card">
                    <h3>{name}</h3>
                    {/* <img src={image} alt="Sponsorship Card" /> */}

                    <div className="sponsorship">
                        <p>About: <span>{image}</span></p>
                        <p>Needs: <span>{needs}</span> </p>
                        <button ref={target} className="button-6" onClick={() => handleAddSponsorship(currentUser)}>+</button>
                        {show ?
                            <Overlay target={target.current} show={show} placement="right">
                                {(props) => (
                                    <Tooltip id="overlay-example" {...props}>
                                        Please Login
                                    </Tooltip>
                                )}
                            </Overlay>
                            : null}
                    </div>
                </div>
            )}
        </AuthenticationContext.Consumer>
    )
}