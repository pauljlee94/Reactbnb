import React from "react"

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            destination: "",
            checkin: "",
            checkout: "",
            guests: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        }, this.handleSubmit)  
        console.log(this.state.destination)  
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState(() => {

        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <label>Where:</label>
                <br/>
                <input className="destination" type="text" placeholder="Anywhere" name="destination" value={this.state.destination} onChange={this.handleChange}/>
                <br/>
                <label>Check-In:</label>
                <br/>
                <input className="date" type="date" name="checkin" value={this.state.checkin} onChange={this.handleChange}/>
                <br/>
                <label>Check-Out:</label>
                <br/>
                <input className="date" type="date" name="checkout" value={this.state.checkout} onChange={this.handleChange}/>
                <br/>
                <label>Guests</label>
                <br/>
                <select name="guests" value={this.state.guests} onChange={this.handleChange}>
                    <option value="">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="5+">5+</option>
                </select>
                <br/>
                <button>search</button>
            </form>
        )
    }
}

export default Form