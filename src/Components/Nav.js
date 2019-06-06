import React from "react"

function Nav(props) {
    // if (props.nav == true) {
        return (
            <nav className={`nav ${props.nav}`}>
                <div classNAme="navTopBar"></div>
                <ul>
                    <li>Home</li>
                    <hr />
                    <li>Log In</li>
                    <li>List your place</li>
                    <li>Learn about hosting</li>
                    <hr />
                    <li>About</li>
                </ul>
            </nav>
        )
    // } else {
    //     return null
    // }
}

export default Nav