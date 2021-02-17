import React from "react";
import Style from "./DisplayLayout.module.css"


export default function DisplayLayout({logo, title, children}) {
    return (
        <div className={Style.layout}>
            <div className={Style.Logo}>
                {logo}
            </div>
            <div className={Style.Title}>
                {title}
            </div>
            <div className={Style.Results}>
                {children}
            </div>
        </div>
    )
};
