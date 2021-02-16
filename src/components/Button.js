import React from "react";
import Style from "./Button.module.css";
import classNames from "classnames";


const SIZE_TO_PIXELS = {
    "xx-large": 96,
    "x-large": 80,
    "large": 64,
    "medium": 48,
    "small": 32,
    "x-small": 24,
    "xx-small": 20,
}


export default function Button({className, children, onClick, size, disabled}) {
    size = size ?? "medium";

    return (
        <button
            style={{
                "width": `${SIZE_TO_PIXELS[size]}px`,
                "height": `${SIZE_TO_PIXELS[size]}px`,
                "font-size": size,
            }}
            className={classNames(
                Style.Button,
                className,
                disabled ? Style.ButtonDisabled : null
            )}
            onClick={disabled ? null : onClick}>
            {children}
        </button>
    )
}
