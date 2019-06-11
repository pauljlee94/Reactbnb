import React from "react";
import Nav from "./Nav";
import NavBar from "./NavBar";
import Footer from "./Footer";

function ResultPage(props) {
  return (
    <div className="loginPage">
      <Nav />
      <NavBar />
      <h1>Looking for places in {props.destination}</h1>
      <span>
        From {props.checkin} to {props.checkout}
      </span>
      {/* MAYBE PUT THIS IN NAVLINK */}
      <br />
      <span>
        For {props.guests} {props.guests > 1 ? "guests" : "guest"}
      </span>
      <Footer position="bottom" />
    </div>
  );
}

export default ResultPage;
