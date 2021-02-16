import React from "react";
import {Link} from "@reach/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";


export default function LinkRole({className, data}) {
    return (
        <Link to={`/roles/${data["id"]}`} className={className}>
            <FontAwesomeIcon icon={faBriefcase}/> {data["name"]}
        </Link>
    )
}
