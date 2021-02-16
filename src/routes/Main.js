import React, {useState, useContext} from "react";
import CoverLayout from "../components/CoverLayout";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import {useAuth0} from "@auth0/auth0-react";
import ContextInstance from "../contexts/ContextInstance";
import ResultsLayout from "../components/ResultsLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import Song from "../components/Entities/Song";


const SELECT_TO_ELEMENT_MAP = {
    "songs": Song,
    "people": null,
    "albums": null,
    "genres": null,
    "layers": null,
    "roles": null,
}


export default function Main() {
    const {
        getAccessTokenSilently,
    } = useAuth0();

    const [searchSelect, setSearchSelect] = useState("songs");
    const [searchText, setSearchText] = useState("");
    const [searchResultsSelect, setSearchResultsSelect] = useState(null);
    const [searchResults, setSearchResults] = useState(null);
    const instance = useContext(ContextInstance);

    async function search(_event) {
        if(searchText === "") {
            console.info("Clearing search results...")
            setSearchResults(null);
            return;
        }

        console.info(`Performing search: ${searchSelect} | ${searchText}`)

        console.debug("Getting access token...")
        const accessToken = await getAccessTokenSilently({});

        console.debug("Building the URL...")
        const url = new URL(`${instance}/search/results`);
        url.search = new URLSearchParams({
            "element_type": searchSelect,
            "query": searchText,
        }).toString()

        console.debug("Querying the API...")
        const response = await fetch(url.toString(), {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
            }
        });
        const data = await response.json();

        console.debug("Search results: ", data)
        setSearchResultsSelect(searchSelect);
        setSearchResults(data);
    }

    const searchBar = (
        <SearchBar
            searchSelect={searchSelect}
            setSearchSelect={setSearchSelect}
            searchText={searchText}
            setSearchText={setSearchText}
            search={search}
        />
    )

    if(searchResults !== null) {
        let results;

        if(searchResults.length === 0) {
            results = (
                <span><FontAwesomeIcon icon={faEllipsisH}/> Nessun elemento trovato.</span>
            )
        }

        else {
            results = searchResults.map((searchResult) => {
                const Type = SELECT_TO_ELEMENT_MAP[searchResultsSelect];
                return <Type data={searchResult} key={searchResult["id"]}/>
            })
        }

        return (
            <ResultsLayout logo={<Logo/>} searchBar={searchBar}>
                {results}
            </ResultsLayout>
        )
    }

    return (
        <CoverLayout>
            <Logo/>
            {searchBar}
        </CoverLayout>
    )
}
