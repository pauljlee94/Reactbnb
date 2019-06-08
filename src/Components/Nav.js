import React from "react"
import {NavLink} from "react-router-dom"

function Nav(props) {
        return (
            <nav className={`nav ${props.nav}`}>
                <div classNAme="navTopBar"></div>
                <ul>
                    <NavLink className="navlink" to="/">Home</NavLink>
                    <hr />
                    <NavLink className="navlink" to="/login">Log In</NavLink>
                    <br/>
                    <NavLink className="navlink" to="/list">List your place</NavLink>
                    <br/>
                    <NavLink className="navlink" to="/learn">Learn about hosting</NavLink>
                    <hr />
                    <NavLink className="navlink" to="/about">About</NavLink>
                </ul>
            </nav>
        )
}

export default Nav