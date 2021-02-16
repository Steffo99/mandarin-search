import React from "react";
import Style from "./SearchBar.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


export default function SearchBar({
    searchSelect,
    setSearchSelect,
    searchText,
    setSearchText,
    search,
}) {

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