import React, {useContext} from "react"
import Style from "./AdvancedSettings.module.css"
import classNames from "classnames"
import Field from "./Field"
import Slider from "./inputs/Slider"
import CheckboxArray from "./inputs/CheckboxArray"
import ContextSearch from "../contexts/ContextSearch"
import LinkGenre from "./links/LinkGenre"


const WEIGHT_TITLES = {
    "albums": {
        a: "Title",
        b: "Description",
        c: "-",
        d: "-",
    },
    "genres": {
        a: "Name",
        b: "Description",
        c: "-",
        d: "-",
    },
    "layers": {
        a: "Name",
        b: "Description",
        c: "-",
        d: "-",
    },
    "people": {
        a: "Name",
        b: "Description",
        c: "-",
        d: "-",
    },
    "roles": {
        a: "Name",
        b: "Description",
        c: "-",
        d: "-",
    },
    "songs": {
        a: "Title",
        b: "Description",
        c: "Lyrics",
        d: "-",
    },

}


export default function AdvancedSettings({className}) {
    const search = useContext(ContextSearch);

    return (
        <div className={classNames(Style.AdvancedSettings, className)}>
            <div className={Style.BoxTitle}>
                Advanced Search
            </div>
            <div className={Style.Tip}>
                You can use the <code>and</code>, <code>or</code>, <code>-token</code> and
                <code>"token1 token2"</code> to perform boolean/phrasal searches.
            </div>
            <Field title={<span>Weight A: <b>{WEIGHT_TITLES[search.type]["a"]}</b></span>}>
                <Slider
                    min={0}
                    max={1}
                    step={0.01}
                    value={search.weightA}
                    onChange={(e) => search.setWeightA(e.target.value)}
                    digits={2}
                />
            </Field>
            <Field title={<span>Weight B: <b>{WEIGHT_TITLES[search.type]["b"]}</b></span>}>
                <Slider
                    min={0}
                    max={1}
                    step={0.01}
                    value={search.weightB}
                    onChange={(e) => search.setWeightB(e.target.value)}
                    digits={2}
                />
            </Field>
            <Field title={<span>Weight C: <b>{WEIGHT_TITLES[search.type]["c"]}</b></span>}>
                <Slider
                    min={0}
                    max={1}
                    step={0.01}
                    value={search.weightC}
                    onChange={(e) => search.setWeightC(e.target.value)}
                    digits={2}
                />
            </Field>
            <Field title={<span>Weight D: <b>{WEIGHT_TITLES[search.type]["d"]}</b></span>}>
                <Slider
                    min={0}
                    max={1}
                    step={0.01}
                    value={search.weightD}
                    onChange={(e) => search.setWeightD(e.target.value)}
                    digits={2}
                />
            </Field>
            <Field title={"Normalization mode"}>
                <CheckboxArray
                    amount={6}
                    value={search.norm}
                    setValue={search.setNorm}
                    titles={[
                        "Divide the rank by 1 + the logarithm of the document length.",
                        "Divide the rank by the document length.",
                        "Divide the rank by the mean harmonic distance between extents.",
                        "Divide the rank by the number of unique words in document.",
                        "Divide the rank by 1 + the logarithm of the number of unique words in document.",
                        "Divide the rank by itself + 1.",
                    ]}
                />
            </Field>
            <Field title={"Thesaurus filter"}>
                {search.filterGenre ?
                    <LinkGenre data={search.filterGenre}/>
                : null}
            </Field>
        </div>
    )
}
