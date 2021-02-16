import React from "react";
import Style from "./EntityField.module.css";
import classNames from "classnames";


export default function EntityField({children, className, title}) {
    return (
        <div className={classNames(Style.EntityField, className)}>
            <div className={Style.Title}>
                {title}
            </div>
            <div className={Style.Value}>
                {children}
            </div>
        </div>
    )
}
