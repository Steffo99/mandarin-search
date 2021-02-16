import React from "react";
import Style from "./Input.module.css";
import classNames from "classnames";

export default function Input({className, disabled, type, onChange, value}) {
    return (
        <input
            type={type}
            className={classNames(Style.Input, className)}
            disabled={disabled}
            onChange={disabled ? null : onChange}
            value={value}
        />
    )
}
