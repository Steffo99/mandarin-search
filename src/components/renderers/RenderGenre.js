import React from "react"
import LinkGenre from "../links/LinkGenre"
import Description from "../Description"
import GenreTree from "../GenreTree"


export default function RenderGenre({data}) {
    let tree
    if (data["supergenre"]) {
        tree = (
            <ul>
                <li>
                    <LinkGenre data={data["supergenre"]}/>
                    <ul>
                        <GenreTree data={data}/>
                    </ul>
                </li>
            </ul>
        )
    } else {
        tree = (
            <ul>
                <GenreTree data={data}/>
            </ul>
        )
    }

    return (
        <div>
            <Description text={data["description"]}/>
            <h2>Tree</h2>
            {tree}
        </div>
    )
}
