import React from 'react';
import "./SponsorsContainer.css"
import Sponsor from "./Sponsor"
import NewSponsor from "./NewSponsor"

export default function SponsorsContainer({ sponsors, setSponsors, addedSponsorships }) {

    return (
        <div className="sponsor-container">
            <div className="new-sponsor">
                <NewSponsor sponsors={sponsors} setSponsors={setSponsors} />
            </div>
            <style>{'body { background-color: rgb(231, 222, 210); }'}</style>
            <div className="sponsors">
                {sponsors.map((sponsor) => {
                    return (
                        <div className="sponsor" >
                            <Sponsor key={sponsor.id} sponsors={sponsors} addedSponsorships={addedSponsorships} setSponsors={setSponsors} />
                        </div>
                    )
                }
                )}
            </div>
            <div className="footer"></div>
        </div>

    )
}