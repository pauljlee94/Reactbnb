import React from "react"
import ExploreCategory from "./ExploreCategory"

class Explore extends React.Component {
    render() {
        return (
            <section className="explorePage">
                <h2>Explore Reactbnb</h2>
                <br/>
                <div className="categoryContainer">
                    <ExploreCategory name="Homes"/>
                    <ExploreCategory name="Restaurants"/>
                    <ExploreCategory name="Things to do"/>
                </div>
            </section>
        )
    }
}

export default Explore