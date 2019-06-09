import React from "react"
import Nav from "./Nav"
import NavBar from "./NavBar"
import Footer from "./Footer"

function List() {
    return(
        <div className="listPage">
            <Nav />
            <NavBar />
            <h1>List your place</h1>
            <Footer position="bottom" />
        </div>
    )
}

export default List