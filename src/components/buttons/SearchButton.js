import React from "react";
import Button from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faSpinner} from "@fortawesome/free-solid-svg-icons";


export default function SearchButton({className, size, isRunning, onClick, disabled}) {
    return (
        <Button size={size} className={className} onClick={onClick} disabled={isRunning || disabled}>
            {isRunning ?
                <FontAwesomeIcon icon={faSpinner} pulse={true}/>
                :
                <FontAwesomeIcon icon={faSearch}/>
            }
        </Button>
    )
}
