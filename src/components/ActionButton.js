import React from "react";
import Style from "./ActionButton.module.css";
import classNames from "classnames";


export default function ActionButton({className, children, onClick}) {
    return (
        <button className={classNames(Style.ActionButton, className)} onClick={onClick}>
            {children}
        </button>
    )
}
