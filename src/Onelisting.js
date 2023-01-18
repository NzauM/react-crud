import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

function Onelisting(){
    const[oneListing, setListing] = useState({})
    let params = useParams()
    console.log(params)
    useEffect(()=>{
        fetch(`http://localhost:3001/listings/${params.id}`).then((resp)=>resp.json()).then((res)=>setListing(res))
    })
    return(
        <>
        <h1>{oneListing.description}</h1>
        <h1>From: {oneListing.location}</h1>
        <img src={oneListing.image}></img>
        <Outlet/>
        </>
    )
}

export default Onelisting