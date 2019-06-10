import React from "react"

function FeaturedItem(props) {
    return(
        <div className="featuredItem">
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <img src={props.src} alt="" />
        </div>
    )
}

export default FeaturedItem