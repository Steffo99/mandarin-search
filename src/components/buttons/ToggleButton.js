import React from "react"
import Style from "./ToggleButton.module.css"
import classNames from "classnames"
import Button from "./Button"


export default function ToggleButton({children, className, state, setState}) {
    return (
        <Button
            className={classNames(
                Style.ToggleButton,
                state ? Style.True : Style.False,
                className
            )}
            onClick={(_e) => {
                setState(!state)
            }}
        >
            {children}
        </Button>
    )
}
