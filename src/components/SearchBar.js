import React, {useState} from "react";
import Style from "./SearchBar.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


export default function SearchBar() {
    const [searchSelect, setSearchSelect] = useState("all");
    const [searchText, setSearchText] = useState("");

    function search(_event) {
        if(searchText === "") {
            console.info("Refusing to search an empty string")
            return;
        }

        console.info(`Performing search: ${searchSelect} | ${searchText}`)
        console.error("Layout is not yet implemented.")
    }

    return (
        <div className={Style.searchBlock}>
            <select
                className={Style.searchSelect}
                onChange={(e) => setSearchSelect(e.target.value)}
                value={searchSelect}
            >
                <option value={"songs"}>Canzoni</option>
                <option value={"people"}>Persone</option>
                <option value={"albums"}>Album</option>
                <option value={"genres"}>Generi</option>
                <option value={"layers"}>Layer</option>
            </select>
            <input
                className={Style.searchBar}
                type={"text"}
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
            />
            <button className={Style.searchButton} onClick={search}>
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
    )
};