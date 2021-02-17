import React from "react";
import Style from "./Description.module.css";
import classNames from "classnames";


export default function Description({text, className}) {
    if(text) {
        return (
            <div className={classNames(Style.Description, className)}>
                {text}
            </div>
        )
    }

    return (
        <div className={classNames(Style.Description, Style.DescriptionEmpty, className)}>
            No description available.
        </div>
    )
}
