import React from "react"
import Style from "./Slider.module.css"
import classNames from "classnames"


export default function Slider({
                                   children,
                                   containerClassName,
                                   sliderClassName,
                                   valueClassName,
                                   min,
                                   max,
                                   step,
                                   value,
                                   onChange,
                                   digits
                               }) {
    return (
        <div className={classNames(Style.SliderContainer, containerClassName)}>
            <input
                type={"range"}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                className={classNames(Style.Slider, sliderClassName)}>
                {children}
            </input>
            <div className={classNames(Style.SliderValue, valueClassName)}>
                {Number(value).toFixed(digits)}
            </div>
        </div>
    )
}
