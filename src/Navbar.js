import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    const buttonStyles = {
        backgroundColor: "aqua",
        margin: 7,
        color: "white",
        padding: 7
    }
    return(
        <div>
            <NavLink to="/home" style={({isActive})=> isActive ? {backgroundColor: "red"} : {buttonStyles}} >Home</NavLink>
            <NavLink to="/search" style={({isActive})=> isActive ? {backgroundColor: "red"} : {buttonStyles}}>Search Listing</NavLink>
            <NavLink to="/addnew" style = {({isActive})=> isActive ? {backgroundColor: "red"} : {buttonStyles}}>New Listing</NavLink>
            <NavLink to="/home/1" style = {({isActive})=> isActive ? {backgroundColor: "red"} : {buttonStyles}}>One Listing</NavLink>
        </div>
    )
}


export default Navbar;