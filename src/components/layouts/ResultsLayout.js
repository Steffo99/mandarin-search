import React from "react"
import Style from "./ResultsLayout.module.css"
import SearchBar from "../SearchBar"
import Logo from "../Logo"


export default function ResultsLayout({children, logo, searchBar}) {
    return (
        <div className={Style.layout}>
            <div className={Style.Logo}>
                {logo}
            </div>
            <div className={Style.SearchBar}>
                {searchBar}
            </div>
            <div className={Style.Results}>
                {children}
            </div>
        </div>
    )
};
