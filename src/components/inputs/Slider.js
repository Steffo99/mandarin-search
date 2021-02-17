import React from "react"
import Style from "./Slider.module.css"
import classNames from "classnames"


export default function Slider({
                                   children,
                                   containerClassName,
                                   sliderClassName,
                                   min,
                                   max,
                                   step,
                                   value,
                                   onChange,
                                   digits
                               }) {
    return (
        <div className={classNames(Style.SliderContainer, sliderClassName)}>
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
            <span>
                {Number(value).toFixed(digits)}
            </span>
        </div>
    )
}
