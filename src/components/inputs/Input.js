import React from "react";
import Style from "./Input.module.css";
import classNames from "classnames";

export default function Input({className, disabled, type, onChange, onKeyPress, value, placeholder}) {
    return (
        <input
            type={type}
            className={classNames(Style.Input, className)}
            disabled={disabled}
            onChange={disabled ? null : onChange}
            onKeyPress={onKeyPress}
            value={value}
            placeholder={placeholder}
        />
    )
}
