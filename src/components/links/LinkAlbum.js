import React from "react";
import {Link} from "@reach/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompactDisc} from "@fortawesome/free-solid-svg-icons";


export default function LinkAlbum({className, data}) {
    return (
        <Link to={`/albums/${data["id"]}`} className={className}>
            <FontAwesomeIcon icon={faCompactDisc}/> {data["title"]}
        </Link>
    )
}
