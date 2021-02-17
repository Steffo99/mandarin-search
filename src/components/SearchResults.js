import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons"
import ENTITY_TYPES from "./entities/ENTITY_TYPES"


export default function SearchResults({search}) {
    const Entity = ENTITY_TYPES[search.type]

    let message
    let entities
    if (search.results === null) {
        message = (
            <span>
                <FontAwesomeIcon icon={faTimes}/> You didn't search for anything.
            </span>
        )
    }
    else if (search.results.length === 0) {
        message = (
            <span>
                <FontAwesomeIcon icon={faTimes}/> No {search.type} were found.
            </span>
        )
    } else {
        message = (
            <span>
                <FontAwesomeIcon icon={faCheck}/> Found {search.results.length} {search.type}.
            </span>
        )
        entities = search.results.map((searchResult) => <Entity data={searchResult} key={searchResult["id"]}/>)
    }


    return (
        <div>
            <div>
                {message}
            </div>
            <div>
                {entities}
            </div>
        </div>
    )
}
