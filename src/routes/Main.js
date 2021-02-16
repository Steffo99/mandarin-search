import React, {useState, useContext} from "react";
import Layout from "../components/Layout";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import {useAuth0} from "@auth0/auth0-react";
import ContextInstance from "../contexts/ContextInstance";


export default function Main() {
    const {
        error,
        isAuthenticated,
        isLoading,
        user,
        getAccessTokenSilently,
        getAccessTokenWithPopup,
        getIdTokenClaims,
        loginWithRedirect,
        loginWithPopup,
        logout,
    } = useAuth0();

    const [searchSelect, setSearchSelect] = useState("songs");
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const instance = useContext(ContextInstance);

    async function search(_event) {
        if(searchText === "") {
            console.info("Refusing to search an empty string")
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

        console.debug("Setting search results...");
        setSearchResults(data);
    }

    return (
        <Layout>
            <Logo/>
            <SearchBar
                searchSelect={searchSelect}
                setSearchSelect={setSearchSelect}
                searchText={searchText}
                setSearchText={setSearchText}
                search={search}
            />
        </Layout>
    )
}
