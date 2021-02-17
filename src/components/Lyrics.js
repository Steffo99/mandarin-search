import React from "react";
import Style from "./Lyrics.module.css";
import classNames from "classnames";


export default function Lyrics({text, className}) {
    if(text) {
        return (
            <div className={classNames(Style.Lyrics, className)}>
                {text}
            </div>
        )
    }

    return (
        <div className={classNames(Style.Lyrics, Style.LyricsEmpty, className)}>
            No lyrics available.
        </div>
    )
}
