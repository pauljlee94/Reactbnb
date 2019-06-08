import React from "react"
import FeaturedItem from "./FeaturedItem"
import parisPicture from "../img/paris.jpg"
import londonPicture from "../img/london.jpg"
import newYorkPicture from "../img/newyork.jpg"
import californiaPicture from "../img/california.jpg"
import koreaPicture from "../img/korea.jpg"
import thailandPicture from "../img/thailand.jpg"




function Featured() {
    return(
        <section className="featuredPage">
        <h2>Featured Locations</h2>
        <br/>
        <div className="featuredContainer">
            <FeaturedItem name="Paris" src={parisPicture} price="$80-130 / Night" />
            <FeaturedItem name="London" src={londonPicture} price="$80-130 / Night" />
            <FeaturedItem name="New York" src={newYorkPicture} price="$80-130 / Night" />
            <FeaturedItem name="California" src={californiaPicture} price="$80-130 / Night" />
            <FeaturedItem name="Korea" src={koreaPicture} price="$80-130 / Night" />
            <FeaturedItem name="Tahiland" src={thailandPicture} price="$80-130 / Night" />
        </div>
    </section>
    )
}

export default Featured