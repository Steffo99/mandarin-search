import React from "react";
import Search from "./Search";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";


export default function Main() {
    return (
        <Search>
            <Logo/>
            <SearchBar/>
        </Search>
    )
}
