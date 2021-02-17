import React from "react";
import Style from "./CoverLayout.module.css"


export default function CoverLayout({children}) {
    return (
        <div className={Style.layout}>
            {children}
        </div>
    )
};
