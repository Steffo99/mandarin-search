import React from "react"
import ResultsLayout from "../components/layouts/ResultsLayout"
import SearchResults from "../components/SearchResults"
import Logo from "../components/Logo"
import SearchBar from "../components/SearchBar"


export default function Search({search}) {
    return (
        <ResultsLayout
            logo={<Logo/>}
            searchBar={<SearchBar search={search}/>}
        >
            <SearchResults search={search}/>
        </ResultsLayout>
    )
}
