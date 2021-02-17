import React from "react";
import classNames from "classnames";
import EntitySong from "../entities/EntitySong";
import Field from "../Field";
import LinkGenre from "../links/LinkGenre";
import LinkRole from "../links/LinkRole";
import LinkPerson from "../links/LinkPerson";
import Description from "../Description";
import Lyrics from "../Lyrics";
import EntityLayer from "../entities/EntityLayer";
import EntityField from "../entities/EntityField";
import Style from "../entities/EntitySong.module.css";
import LinkAlbum from "../links/LinkAlbum";
import LinkSong from "../links/LinkSong";
import PlayerButton from "../buttons/PlayerButton";


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
