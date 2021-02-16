import React from "react";
import Style from "./SearchResults.module.css";
import classNames from "classnames";
import Song from "./entities/Song";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";


const SELECT_TO_ELEMENT_MAP = {
    "songs": Song,
    "people": null,
    "albums": null,
    "genres": null,
    "layers": null,
    "roles": null,
}


export default function SearchResults({value}) {
    if(value.data.length === 0) {
        return (
            <span><FontAwesomeIcon icon={faEllipsisH}/> No {value.query.type} were found.</span>
        )
    }

    else {
        const Type = SELECT_TO_ELEMENT_MAP[value.query.type];
        return value.data.map((searchResult) => (
            <Type data={searchResult} key={searchResult["id"]}/>
        ));
    }
}
