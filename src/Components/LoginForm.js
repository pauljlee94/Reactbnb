import React from 'react'

class LoginForm extends React.Component {
    render() {
        return (
            <div className="loginForm">
                <h1>Log In</h1>
                <form>
                    <label>Email:</label>
                    <br/>
                    <input type="text" />
                    <br/>
                    <label>Password:</label>
                    <br/>
                    <input type="password" />
                    <br/>
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default LoginForm