import React from "react"
import Style from "./AdvancedSettings.module.css"
import classNames from "classnames"
import Field from "./Field"
import Slider from "./inputs/Slider"


export default function AdvancedSettings({className, search}) {
    return (
        <div className={classNames(Style.AdvancedSettings, className)}>
            <Field title={"Weight A"}>
                <Slider
                    min={0}
                    max={5}
                    step={0.1}
                    value={search.weightA}
                    onChange={(e) => search.setWeightA(e.target.value)}
                    digits={1}
                />
            </Field>
            <Field title={"Weight B"}>
                <Slider
                    min={0}
                    max={5}
                    step={0.1}
                    value={search.weightB}
                    onChange={(e) => search.setWeightB(e.target.value)}
                    digits={1}
                />
            </Field>
            <Field title={"Weight C"}>
                <Slider
                    min={0}
                    max={5}
                    step={0.1}
                    value={search.weightC}
                    onChange={(e) => search.setWeightC(e.target.value)}
                    digits={1}
                />
            </Field>
            <Field title={"Weight D"}>
                <Slider
                    min={0}
                    max={5}
                    step={0.1}
                    value={search.weightD}
                    onChange={(e) => search.setWeightD(e.target.value)}
                    digits={1}
                />
            </Field>
        </div>
    )
}
