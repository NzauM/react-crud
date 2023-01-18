import React, {useState, useEffect, useRef} from "react";
import { useParams, useNavigate } from "react-router-dom";





function Editlisting(){
    // const mylistingData = useRef({
    //     description: "",
    //     location: "",
    //     image: ""
    // })
    const[listingData, setListingData] = useState({
        description: "",
        location: "",
        image: ""
    })
    let params = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:3001/listings/${params.id}`).then((res)=>res.json()).then((resp)=>setListingData(resp))
    },[])

    function handleChange(e){
        // mylistingData[`${e.target.name}`] = e.target.value
        // listingData[`${e.target.name}`] = e.target.value
        setListingData({...listingData, [e.target.name]: e.target.value})        
    }
    

    function handleSubmit(e){
        e.preventDefault()
        console.log(listingData)
        fetch(`http://localhost:3001/listings/${params.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",                
            },
            body: JSON.stringify(listingData)
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            navigate(`/home`)
        })
    }

    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Description
                    <input type="text"  value={listingData.description} onChange={handleChange} name="description"/>
                </label>
                <label>
                    <input type="text"  value={listingData.location} onChange={handleChange} name="location"/>
                </label>
                <label>
                    <input type="text"  value={listingData.image} onChange={handleChange} name="image"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Editlisting;