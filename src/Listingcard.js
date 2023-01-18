import React,{useState, useEffect} from "react";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Deletelisting from "./Deletelisting";



function Listingcard({description, location, pic, id}){
    return(
        <div style={{border: "3px solid black",width:"40%", minWidth: 0}}>
            <img src={`./${pic}`}></img>
            <p>{location}</p>
            <p>{description} </p>
            <Deletelisting listingId={id}/>
            <button>
            <Link to={`edit/${id}`}> <AiFillEdit/> Edit </Link>
            </button>
            <button>
            <Link to={`${id}`}> <AiFillEye/> View </Link>
            </button>            
            
            
        </div>
    )
}

export default Listingcard