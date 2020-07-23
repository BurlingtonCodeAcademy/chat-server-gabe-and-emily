import React from "react"
import {Link} from "react-router-dom"

// Creates links for the navigation. These are displayed on all pages. 
function Nav(props){
    return(
        <>
        <nav id="nav">
            <Link to="/">Home</Link>
            <Link to="/room">Room</Link>
            <Link to="/dogs">Dogs</Link>
        </nav>
        </>
    )
}

export default Nav