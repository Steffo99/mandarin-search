import React from "react";
import Style from "./SearchBar.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faSearch} from "@fortawesome/free-solid-svg-icons";


export default function SearchBar() {
    function search() {
        console.warn("La ricerca non è ancora stata implementata.")
    }

    return (
        <div className={Style.searchBlock}>
            <select className={Style.searchSelect}>
                <option>Tutto</option>
                <option>Layer</option>
                <option>Brani</option>
                <option>Album</option>
                <option>Persone</option>
            </select>
            <input className={Style.searchBar} type={"text"}/>
            <button className={Style.searchButton}>
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
    )
};