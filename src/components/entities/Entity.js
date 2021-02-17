import React from "react"
import Style from "./Entity.module.css"
import classNames from "classnames"


export default function Entity({className, button, title, contents, fields}) {
    return (
        <div className={classNames(Style.Entity, className)}>
            {button ?
                <div className={Style.Button}>
                    {button}
                </div>
                : null}
            {title ?
                <div className={Style.Title}>
                    {title}
                </div>
                : null}
            {contents ?
                <div className={Style.Contents}>
                    {contents}
                </div>
                : null}
            {fields ?
                <div className={Style.Fields}>
                    {fields}
                </div>
                : null}
        </div>
    )
}
