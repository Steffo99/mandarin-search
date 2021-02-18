import React, {useContext} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import ContextSearch from "../../contexts/ContextSearch"
import ToggleButton from "./ToggleButton"


export default function FilterButton({className, data, size, disabled}) {
    const search = useContext(ContextSearch);

    const state = search.filterGenre && search.filterGenre["id"] === data["id"];
    function setState(value) {
        if(value) {
            console.debug("Setting filter")
            search.setFilterGenre(data);
            if(!(search.type === "songs" || search.type === "albums")) {
                search.setType("songs")
            }
        }
        else {
            console.debug("Clearing filter")
            search.setFilterGenre(null);
        }
    }

    return (
        <ToggleButton
            size={size}
            className={className}
            state={state}
            setState={setState}
            disabled={disabled}
        >
            <FontAwesomeIcon icon={faFilter}/>
        </ToggleButton>
    )
}
