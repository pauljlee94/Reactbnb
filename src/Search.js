import React from "react"
import "./index.css"
import Form from "./Form"
import logo from "./img/logo.png"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            where: "" ,
            checkIn: "" ,
            checkOut: "" ,
            guests: "",
        }
    }

    render() {
        return (
            <div className="searchPage">
                <img src={logo} className="logo" />
                <div className="searchBox">
                    <h1>Book cool places</h1>
                    <Form />
                </div>
            </div>
        )
    }
}

export default Search