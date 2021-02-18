import React from "react"
import Style from "./Lyrics.module.css"
import classNames from "classnames"


export default function Lyrics({text, className}) {
    if (text) {
        return (
            <pre className={classNames(Style.Lyrics, className)}>
                {text}
            </pre>
        )
    }

    return (
        <pre className={classNames(Style.Lyrics, Style.LyricsEmpty, className)}>
            No lyrics available.
        </pre>
    )
}
