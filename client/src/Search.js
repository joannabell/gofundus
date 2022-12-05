import React, { useState } from "react";
import "./Search.css"

function Search({ handleSearchChange }) {
    const [searchValue, setSearchValue] = useState("")
    const handleSearchValueChange = (e) => {
        setSearchValue(e.target.value)
        handleSearchChange(e.target.value)
    }
    
    return (
        <div className="search">
            <form className="search-bar">
                <input type="text" placeholder="search" value={searchValue} onChange={handleSearchValueChange} />
            </form>
        </div>
    )
}

export default Search