import React from "react";
import Style from "./Search.module.css"


export default function Search({children}) {
    return (
        <div className={Style.layout}>
            {children}
        </div>
    )
};
