import React, { useState } from "react";

function Searchlisting({setSearch}) {
    const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = (e) => {
        setSearchTerm(() => e.target.value)
    }

    const handleSetSearch = (e) => {
        e.preventDefault()
        setSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSetSearch}>
            <label>
                Search Listing:
                <input onChange={handleSearch} type="text" name="term"></input>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Searchlisting