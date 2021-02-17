import React from "react"
import ResultsLayout from "../components/layouts/ResultsLayout"
import SearchResults from "../components/SearchResults"


export default function Home(search) {
    return (
        <ResultsLayout>
            <SearchResults value={search.results}/>
        </ResultsLayout>
    )
}
