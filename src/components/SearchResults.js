import React, {useContext} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons"
import ENTITY_TYPES from "./entities/ENTITY_TYPES"
import ContextSearch from "../contexts/ContextSearch"


export default function SearchResults() {
    const search = useContext(ContextSearch);

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
                <FontAwesomeIcon icon={faTimes}/> No {search.results.type} were found.
            </span>
        )
    } else {
        const Entity = ENTITY_TYPES[search.results.type]
        message = (
            <span>
                <FontAwesomeIcon icon={faCheck}/> Found {search.results.data.length} {search.results.type}.
            </span>
        )
        entities = search.results.data.map((searchResult) => <Entity data={searchResult} key={searchResult["id"]}/>)
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
