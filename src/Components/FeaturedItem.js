import React from "react"
import { tsPropertySignature } from "@babel/types";

function FeaturedItem(props) {
    return(
        <div className="featuredItem">
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <img src={props.src} />
        </div>
    )
}

export default FeaturedItem