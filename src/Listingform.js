import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function ListingForm({addedListing}) {
    const[finalData, setFinalData] = useState({})
    const navigate = useNavigate();

    function handleChange(e){
        const fieldname = e.target.name
        const fieldval = e.target.value
        setFinalData({...finalData,[fieldname]: fieldval})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3001/listings",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(finalData)
        })
        .then((r)=>r.json())
        .then((data)=>{
            addedListing(data)
            navigate("/home")
        })
        
        // addedListing(finalData)
    }



    return (
        <>
            <form onSubmit={handleSubmit} style={{display: "flex", flexflow: "column nowrap"}}>
                <label>
                    Image  
                    <input onBlur={handleChange} type="text" name="image" />
                </label>
                <label>
                    Your Location 
                    <input onBlur={handleChange} type="text" name="location" />
                </label>
                <label>
                    Small Description 
                    <input onBlur={handleChange} type="text" name="description" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default ListingForm