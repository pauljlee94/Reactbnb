import React from "react"
import "../index.css"
import logo from "../img/logo.png"

import Form from "./Form"
import Nav from "./Nav"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            // where: "" ,
            // checkIn: "" ,
            // checkOut: "" ,
            // guests: "",
            nav: "hidden"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.nav === "hidden") {
            console.log("hidden")
            this.setState( () => {
                return {
                    nav: ""
                }
            })
        } else {
            this.setState( () => {
                return {
                    nav: "hidden"
                }
            })
        }
    }

    render() {
        return (
            <div className="searchPage">
                <img 
                    src={logo} 
                    alt="Reactbnb Logo" 
                    className="logo" 
                    onClick={this.handleClick} 
                />
                <Nav nav={this.state.nav} />
                <div className="searchBox">
                    <h1>Book amazing places</h1>
                    <Form />
                </div>
            </div>
        )
    }
}

export default Search