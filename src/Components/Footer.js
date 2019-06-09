import React from "react"
import {NavLink} from "react-router-dom"

function Footer(props) {
    return(
        <footer className={props.position}>
            <ul>
                <NavLink className="navlink" to="/" >Home</NavLink>
                <NavLink className="navlink" to="/login" >Log In</NavLink>
                <NavLink className="navlink" to="/list" >List your place</NavLink>
                <NavLink className="navlink" to="/learn" >Learn about hosting</NavLink>
                <NavLink className="navlink" to="/about" >About</NavLink>
            </ul>
        </footer>
    )
}

export default Footer