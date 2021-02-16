import React from "react";
import EntitySong from "./entities/EntitySong";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import EntityAlbum from "./entities/EntityAlbum";
import EntityPerson from "./entities/EntityPerson";
import EntityGenre from "./entities/EntityGenre";
import EntityLayer from "./entities/EntityLayer";
import EntityRole from "./entities/EntityRole";


const SELECT_TO_ELEMENT_MAP = {
    "songs": EntitySong,
    "people": EntityPerson,
    "albums": EntityAlbum,
    "genres": EntityGenre,
    "layers": EntityLayer,
    "roles": EntityRole,
}


export default function SearchResults({value}) {
    if(value.data.length === 0) {
        return (
            <div>
                <div>
                    <FontAwesomeIcon icon={faTimes}/> No {value.query.type} were found.
                </div>
            </div>
        )
    }

    else {
        const Type = SELECT_TO_ELEMENT_MAP[value.query.type];
        return (
            <div>
                <div>
                    <FontAwesomeIcon icon={faCheck}/> Found {value.data.length} {value.query.type}.
                </div>
                {
                    value.data.map((searchResult) => (
                        <Type data={searchResult} key={searchResult["id"]}/>
                    ))
                }
            </div>
        );
    }
}
