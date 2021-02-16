import React from "react";
import {Link} from "@reach/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHashtag} from "@fortawesome/free-solid-svg-icons";


export default function LinkGenre({className, data}) {
    return (
        <Link to={`/genres/${data["id"]}`} className={className}>
            <FontAwesomeIcon icon={faHashtag}/> {data["name"]}
        </Link>
    )
}
