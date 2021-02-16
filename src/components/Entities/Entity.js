import React from "react";
import Style from "./Entity.module.css";
import classNames from "classnames";


export default function Entity({className, button, title, children}) {
    return (
        <div className={classNames(Style.Entity, className)}>
            <div className={Style.Button}>
                {button}
            </div>
            <div className={Style.Title}>
                {title}
            </div>
            <div className={Style.Contents}>
                {children}
            </div>
        </div>
    )
}
