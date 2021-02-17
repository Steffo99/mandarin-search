import React from "react"
import {Link} from "@reach/router"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMusic} from "@fortawesome/free-solid-svg-icons"


export default function LinkSong({className, data}) {
    return (
        <Link to={`/songs/${data["id"]}`} className={className}>
            <FontAwesomeIcon icon={faMusic}/> {data["title"]}
        </Link>
    )
}
