import React from "react"
import Field from "../Field"
import Description from "../Description"
import LinkSong from "../links/LinkSong"
import PlayerButton from "../buttons/PlayerButton"


export default function RenderLayer({data}) {
    return (
        <div>
            <Description text={data["description"]}/>
            <h2>Attributes</h2>
            {data["song"] ?
                <Field title={"Song"}>
                    <LinkSong data={data["song"]}/>
                </Field>
                : null}
            <h2>Listen</h2>
            <PlayerButton size={"large"} layerId={data["id"]}/>
        </div>
    )
}
