import React from "react";
import Style from "./Layout.module.css"


export default function Layout({children}) {
    return (
        <div className={Style.layout}>
            {children}
        </div>
    )
};
