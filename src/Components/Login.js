import React from "react"
import Nav from "./Nav"
import NavBar from "./NavBar"
import LoginForm from "./LoginForm"
import Footer from "./Footer"

function Login() {
    return(
        <div className="loginPage">
            <Nav />
            <NavBar />
            <LoginForm />
            <Footer position="bottom" />
        </div>
    )
}

export default Login