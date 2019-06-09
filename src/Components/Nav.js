import React from "react"
import {NavLink} from "react-router-dom"
import logo from "../img/logo.png"

class Nav extends React.Component {
    
    constructor() {
        super()
        this.state = {
            nav: "hidden",
        }
        this.handleClick = this.handleClick.bind(this)
        this.closeNav = this.closeNav.bind(this)
    }
    
    handleClick() {
        if (this.state.nav === "hidden") {
            this.setState( () => {
                return {
                    nav: "",
                }
            })
        } else {
            this.setState( () => {
                return {
                    nav: "hidden",
                }
            })
        }
    }
    
    closeNav() {
        this.setState( () => {
            return {
                nav: "hidden",
            }
        })
    }

    render() {
        return (
            <div>
                <img 
                    src={logo} 
                    alt="Reactbnb Logo" 
                    className="logo" 
                    onClick={this.handleClick} 
                />
                <nav className={"nav" + " " + this.state.nav}>
                    <div classNAme="navTopBar"></div>
                    <ul>
                        <NavLink className="navlink" to="/" onClick={this.closeNav}>Home</NavLink>
                        <hr />
                        <NavLink className="navlink" to="/login" onClick={this.closeNav}>Log In</NavLink>
                        <br/>
                        <NavLink className="navlink" to="/list" onClick={this.closeNav}>List your place</NavLink>
                        <br/>
                        <NavLink className="navlink" to="/learn" onClick={this.closeNav}>Learn about hosting</NavLink>
                        <hr />
                        <NavLink className="navlink" to="/about" onClick={this.closeNav}>About</NavLink>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav