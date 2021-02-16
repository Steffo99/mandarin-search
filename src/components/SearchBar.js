import React, {useState, useContext} from "react";
import Style from "./SearchBar.module.css"
import {useAuth0} from "@auth0/auth0-react";
import Input from "./inputs/Input";
import SearchButton from "./buttons/SearchButton";
import Select from "./inputs/Select";
import ContextInstance from "../contexts/ContextInstance";


export default function SearchBar({setSearchResults, startingQueryType, startingQueryText}) {

    const {getAccessTokenSilently, isAuthenticated} = useAuth0();
    const instance = useContext(ContextInstance);

    const [queryType, setQueryType] = useState(startingQueryType ?? "songs");
    const [queryText, setQueryText] = useState(startingQueryText ?? "");
    const [isRunning, setRunning] = useState(false);

    async function search(_event) {
        setRunning(true);

        if(queryText === "") {
            console.info("Clearing search results...")
            setSearchResults(null);
            return;
        }

        console.info(`Performing search: ${queryType} | ${queryText}`)

        console.debug("Getting access token...")
        const accessToken = await getAccessTokenSilently({});

        console.debug("Building the URL...")
        const url = new URL(`${instance}/search/results`);
        url.search = new URLSearchParams({
            "element_type": queryType,
            "query": queryText,
        }).toString()

        console.debug("Querying the API...")
        const response = await fetch(url.toString(), {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        const data = await response.json();

        console.debug("Search results: ", data)
        setSearchResults({
            query: {
                type: queryType,
                text: queryText,
            },
            data: data,
        });

        setRunning(false);
    }

    return (
        <div className={Style.searchBlock}>
            <Select
                onChange={(e) => setQueryType(e.target.value)}
                value={queryType}
                className={Style.Select}
                disabled={!isAuthenticated}
            >
                <option value={"songs"}>Songs</option>
                <option value={"people"}>People</option>
                <option value={"albums"}>Albums</option>
                <option value={"genres"}>Genres</option>
                <option value={"roles"}>Roles</option>
                <option value={"layers"}>Layers</option>
            </Select>
            <Input
                className={Style.Input}
                type={"text"}
                onChange={(e) => setQueryText(e.target.value)}
                value={isAuthenticated ? queryText : "Not logged in."}
                disabled={!isAuthenticated}
            />
            <SearchButton className={Style.Button} onClick={search} disabled={!isAuthenticated} isRunning={isRunning}/>
        </div>
    )
};