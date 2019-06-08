import React from "react"

class Form extends React.Component {
    constructor() {
        super()
        this.state = {

        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <label>Where:</label>
                <br/>
                <input className="destination" type="text" placeholder="Anywhere "/>
                <br/>
                <label>Check-In:</label>
                <br/>
                <input className="date" type="date" placeholder="Anywhere "/>
                <br/>
                <label>Check-Out:</label>
                <br/>
                <input className="date" type="date" placeholder="Anywhere "/>
                <br/>
                <label>Guests</label>
                <br/>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>5+</option>
                </select>
                <br/>
                <button>search</button>
            </form>
        )
    }
}

export default Form