import React from "react"
import placeholder from "../img/placeholder.png"

function ExploreCategory(props) {
    return (
        <div className="exploreCategory">
            <img src={placeholder} />
            <p>{props.name}</p>
        </div>
    )
}

export default ExploreCategory