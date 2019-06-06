import React from "react"
import "../index.css"
import logo from "../img/logo.png"

import Form from "./Form"
import Nav from "./Nav"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            where: "" ,
            checkIn: "" ,
            checkOut: "" ,
            guests: "",
            nav: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                nav: !prevState.nav
            }
        })
        
    }

    render() {
        return (
            <div className="searchPage">
                <img src={logo} alt="Reactbnb Logo" className="logo" onClick={this.handleClick} value={this.state.nav}/>
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