import React, {useState} from "react"
import Style from "./CheckboxArray.module.css"
import classNames from "classnames"


export default function CheckboxArray({
    children,
    containerClassName,
    arrayClassName,
    sliderClassName,
    valueClassName,
    amount,
    value,
    setValue,
    titles,
}) {
    let checkboxes = []

    for(let i = 0; i < amount; i++) {
        const checked = Boolean(value & (2 ** i));

        checkboxes.push(
            <input
                type={"checkbox"}
                checked={checked}
                onChange={recalculate}
                className={classNames(Style.Checkbox, sliderClassName)}
                title={titles ? titles[i] : undefined}
                key={i}
                _mandarinValue={2 ** i}
            >
                {children}
            </input>
        )
    }


    function recalculate(event) {
        const change = Number(event.target.attributes["_mandarinValue"].value)
        if(event.target.checked) {
            setValue(value + change)
        }
        else {
            setValue(value - change)
        }
    }

    return (
        <div className={classNames(Style.CheckboxContainer, containerClassName)}>
            <div className={classNames(Style.CheckboxArray, arrayClassName)}>
                {checkboxes}
            </div>
            <div className={classNames(Style.CheckboxArrayValue, valueClassName)}>
                {Number(value).toFixed(0)}
            </div>
        </div>
    )
}
