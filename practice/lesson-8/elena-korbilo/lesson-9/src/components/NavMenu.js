import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import "./NavMenu.css"

export default function NavMenu() {
    return (
        <>
            <Link to="/" className="links">
                Main
            </Link>
            <Link to="/about" className="links">
                Biography
            </Link> 
            <Link to="/famous" className="links">
                Famous Picture
            </Link> 
            <Link to="/collection" className="links">
                Collection
            </Link> 
        </>
    )
}
