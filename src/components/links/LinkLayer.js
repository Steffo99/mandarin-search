import React from "react";
import {Link} from "@reach/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLayerGroup} from "@fortawesome/free-solid-svg-icons";


export default function LinkLayer({className, data}) {
    return (
        <Link to={`/layers/${data["id"]}`} className={className}>
            <FontAwesomeIcon icon={faLayerGroup}/> {data["name"]}
        </Link>
    )
}
