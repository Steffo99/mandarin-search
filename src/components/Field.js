import React from "react";
import Style from "./Field.module.css";
import classNames from "classnames";


export default function Field({children, className, title}) {
    return (
        <div className={classNames(Style.Field, className)}>
            <div className={Style.Title}>
                {title}
            </div>
            <div className={Style.Value}>
                {children}
            </div>
        </div>
    )
}
