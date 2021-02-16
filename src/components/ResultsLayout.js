import React from "react";
import Style from "./ResultsLayout.module.css"


export default function ResultsLayout({logo, searchBar, children}) {
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
