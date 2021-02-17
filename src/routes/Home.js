import React, {useState} from "react";
import CoverLayout from "../components/layouts/CoverLayout";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import ResultsLayout from "../components/layouts/ResultsLayout";
import SearchResults from "../components/SearchResults";


export default function Home() {
    const [searchResults, setSearchResults] = useState(null);

    const logo = <Logo/>
    const searchBar = (
        <SearchBar
            setSearchResults={setSearchResults}
            startingQueryType={searchResults ? searchResults.query.type : undefined}
            startingQueryText={searchResults ? searchResults.query.text : undefined}
        />
    )

    if(searchResults !== null) {

        return (
            <ResultsLayout logo={logo} searchBar={searchBar}>
                <SearchResults value={searchResults}/>
            </ResultsLayout>
        );
    }

    return (
        <CoverLayout>
            {logo}
            {searchBar}
        </CoverLayout>
    )
}
