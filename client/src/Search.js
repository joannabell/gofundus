import React from "react";
import "./Search.css"

function Search({handleSearchChange, searchValue}) {


    return (
        <div className="search">
            <form className="search-bar">
                <input type="text" placeholder="Search sponsorship opportunities..." value={searchValue} onChange={handleSearchChange}/>
            </form>
        </div>
    )

}

export default Search