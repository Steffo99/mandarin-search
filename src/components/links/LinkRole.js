import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBriefcase} from "@fortawesome/free-solid-svg-icons"


export default function LinkRole({className, data}) {
    return (
        <span className={className}>
            <FontAwesomeIcon icon={faBriefcase}/> {data["name"]}
        </span>
    )
}
