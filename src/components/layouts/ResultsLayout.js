import React from "react"
import Style from "./ResultsLayout.module.css"
import SearchBar from "../SearchBar"
import Logo from "../Logo"


export default function ResultsLayout({children}) {
    return (
        <div className={Style.layout}>
            <div className={Style.Logo}>
                <Logo/>
            </div>
            <div className={Style.SearchBar}>
                <SearchBar/>
            </div>
            <div className={Style.Results}>
                {children}
            </div>
        </div>
    )
};
