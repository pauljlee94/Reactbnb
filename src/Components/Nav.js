import React from "react"

function Nav(props) {
    if (props.nav == true) {
        console.log("yes")
        return (
            <div className="nav">
                <ul>
                    <li>login</li>
                    <li>about</li>
                </ul>
            </div>
        )
    } else {
        return null
    }
}

export default Nav