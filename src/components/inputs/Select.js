import React from "react"
import Style from "./Select.module.css"
import classNames from "classnames"

export default function Select({children, className, disabled, onChange, value}) {
    return (
        <select
            className={classNames(Style.Select, className)}
            disabled={disabled}
            onChange={disabled ? null : onChange}
            value={value}
        >
            {children}
        </select>
    )
}
