import React, { useState, useEffect } from "react";
import Listingcard from "./Listingcard";
import ListingForm from "./Listingform";
import Searchlisting from "./Searchlisting";
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from "./Navbar";
import Onelisting from "./Onelisting";
import Editlisting from "./Editlisting";

// fetch data from api and set it to state
// loop through listings displaying each as card




function Displaylistings() {
    const [listings, setListings] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/listings").then((resp) => resp.json()).then((data) => setListings((listings) => data))
    }, [])

    const listingsmap = listings.map((item, ind) => {
        return (
            <>
            <Listingcard key={item.id} id={item.id} description={item.description} location={item.location} pic={item.image}></Listingcard>
            </>
            
        )
    })

    console.log(listings)

    function onListAdded(newListing) {
        console.log(newListing)
        setListings((listings) => [...listings, newListing])
    }

    function handleListingSearch(searchWord) {
        console.log(searchWord)
        let foundListings = listings.filter((elem) => {
            return (elem.description.includes(searchWord))
        })
        if (foundListings.length < 1) {
            foundListings = listings
        }
        setListings(foundListings)
    }

    return (
        <>

            <Navbar />
            <h1> Good Morning World </h1>


            <Routes>
                <Route path="/search" element={<><Searchlisting setSearch={handleListingSearch} /> <div style={{ display: 'flex' }}>
                    {listingsmap}
                </div></>}>
                    <Route path=':id' element={<Onelisting />} />
                </Route>
                <Route exact path="/addnew" element={<ListingForm addedListing={onListAdded} />} />
                <Route path="home" element={<>  <div style={{display: 'flex'}}>
            {listingsmap}
            </div> <Outlet/></>}>
                    <Route path=':id' element={<Onelisting/>}/> 
                    <Route path='trial' element={<><h1>Hey there</h1></>} />
                    <Route path="*" element={<h1>Wrong Route</h1>} />
                </Route>
                <Route path='home/edit/:id' element={<Editlisting/>}/> 
                <Route path="*" element={<h1>Wrong Route</h1>} />
            </Routes>
            {/* <div style={{display: 'flex'}}>
            {listingsmap}
            </div> */}




        </>
    )
}

export default Displaylistings