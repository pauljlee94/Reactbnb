import React from 'react'
import Nav from "./Nav"
import NavBar from "./NavBar"
import Footer from "./Footer"

function ResultPage(props) {
    return (
        <div className="loginPage">
            <Nav />
            <NavBar />
            <h1>Looking for places in {props.destination} from {props.checkin} to {props.checkout} for {props.guests} guests.</h1>
            <Footer position="bottom" />
        </div>
    )
}

export default ResultPage