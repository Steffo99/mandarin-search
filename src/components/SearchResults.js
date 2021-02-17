import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons"
import ENTITY_TYPES from "./entities/ENTITY_TYPES"


export default function SearchResults({results, type}) {
    const Entity = ENTITY_TYPES[type]

    let message
    if (results.length === 0) {
        message = (
            <span>
                <FontAwesomeIcon icon={faTimes}/> No {type} were found.
            </span>
        )
    } else {
        message = (
            <span>
                <FontAwesomeIcon icon={faCheck}/> Found {results.length} {type}.
            </span>
        )
    }

    const entities = results.map((searchResult) => <Entity data={searchResult} key={searchResult["id"]}/>)

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
