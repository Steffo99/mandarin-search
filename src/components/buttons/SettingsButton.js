import React from "react"
import Style from "./SettingsButton.module.css"
import classNames from "classnames"
import ToggleButton from "./ToggleButton"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCog} from "@fortawesome/free-solid-svg-icons"


export default function SettingsButton({className, size, disabled, state, setState}) {
    return (
        <ToggleButton
            className={classNames(Style.SettingsButton, className)}
            state={state}
            setState={setState}
            size={size}
            disabled={disabled}
        >
            <FontAwesomeIcon icon={faCog} spin={state}/>
        </ToggleButton>
    )
}
