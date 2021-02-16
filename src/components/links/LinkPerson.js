import React from "react";
import {Link} from "@reach/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";


export default function LinkPerson({className, data}) {
    return (
        <Link to={`/people/${data["id"]}`} className={className}>
            <FontAwesomeIcon icon={faUser}/> {data["name"]}
        </Link>
    )
}
