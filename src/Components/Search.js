import React from "react"
import "../index.css"
import logo from "../img/logo.png"

import Form from "./Form"
import Nav from "./Nav"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            nav: "hidden",
            imageUrl: "https://source.unsplash.com/featured/?vacation,city"
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

    componentDidMount() {
        setInterval(() => {
            fetch("https://source.unsplash.com/featured/?vacation,city")
            .then((response) => {
                this.setState(() => {
                    return {
                        imageUrl: response.url
                    }
                })
            })
        }, 3000)
    }

    render() {
        return (
            <div className="searchPage" style={{backgroundImage: "url(" + this.state.imageUrl + ")"}}>
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