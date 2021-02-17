import React from "react"
import CoverLayout from "../components/layouts/CoverLayout"
import Logo from "../components/Logo"
import SearchBar from "../components/SearchBar"


export default function Home({search}) {

    const logo = <Logo/>
    const searchBar = (
        <SearchBar search={search}/>
    )

    return (
        <CoverLayout>
            {logo}
            {searchBar}
        </CoverLayout>
    )
}
