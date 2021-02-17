import React from "react";
import classNames from "classnames";
import LinkGenre from "./links/LinkGenre";


export default function GenreTree({data, className}) {
    return (
        <li>
            <LinkGenre data={data}/>
            <ul className={className}>
                {data["subgenres"] ? data["subgenres"].map((genre) => <GenreTree data={genre}/>) : null}
            </ul>
        </li>
    )
}
