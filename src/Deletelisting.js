import React from "react";
import { AiFillDelete } from "react-icons/ai";


function Deletelisting({ listingId }) {
    function handleDelete() {
        // let resp = confirm()
        if (window.confirm("Are you sure you want to delete?")) {
            fetch(`http://localhost:3001/listings/${listingId}`, {
                method: "DELETE"
            }).then((r) => r.json()).then(() => console.log("deleted"))
        }

    }
    return (
        <>
            <button onClick={handleDelete}> <AiFillDelete /> Delete </button>
        </>
    )
}

export default Deletelisting;