import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

// import Form from "./Form"
import Nav from "./Nav";
import ResultPage from "./ResultPage";

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      nav: "hidden",
      imageUrl: "url(https://source.unsplash.com/1920x1080/?vacation,city)"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.nav === "hidden") {
      this.setState(() => {
        return {
          nav: ""
        };
      });
    } else {
      this.setState(() => {
        return {
          nav: "hidden"
        };
      });
    }
  }

  componentDidMount() {
    setInterval(() => {
      fetch("https://source.unsplash.com/1920x1080/?vacation,city").then(
        response => {
          this.setState(() => {
            return {
              imageUrl: "url(" + response.url + ")"
            };
          });
        }
      );
    }, 6000);
  }

  render() {
    return (
      <div
        className="searchPage"
        style={{ backgroundImage: this.state.imageUrl }}
      >
        <Nav />
        <div className="searchBox">
          <h1>Book amazing places</h1>
          <form onSubmit={this.props.onSubmit}>
            <label>Where:</label>
            <br />
            <input
              className="destination"
              type="text"
              placeholder="Anywhere"
              name="destination"
              value={this.props.destination}
              onChange={this.props.handleChange}
            />
            <br />
            <label>Check-In:</label>
            <br />
            <input
              className="date"
              type="date"
              name="checkin"
              value={this.props.checkin}
              onChange={this.props.handleChange}
            />
            <br />
            <label>Check-Out:</label>
            <br />
            <input
              className="date"
              type="date"
              name="checkout"
              value={this.props.checkout}
              onChange={this.props.handleChange}
            />
            <br />
            <label>Guests</label>
            <br />
            <select
              name="guests"
              value={this.props.guests}
              onChange={this.props.handleChange}
            >
              <option value="">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="5+">5+</option>
            </select>
            <br />
            <Link className="searchButton" to="/result">
              Search
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchPage;
